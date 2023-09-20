import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";


export class News extends Component {
  static defaultProps={
    country: 'in',
    pageSize:10,
    category:'general',
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
   capitalize=(s)=>
{
    return s && s[0].toUpperCase() + s.slice(1);
}
  constructor(props) {
    super(props);
    // console.log("hello i am constructor from news item");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.capitalize(this.props.category)}: E-Newspaper`;
  }
  async componentDidMount() {
    this.props.setProgress(10);
  this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=102a2d9a536447b0bf0ff8cdc5f78128&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  handlePrevClick = async () => {
    this.props.setProgress(10);
    this.setState({loading: true});
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=102a2d9a536447b0bf0ff8cdc5f78128&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
    this.props.setProgress(100);
  };

  handleNextClick = async () => {
    this.props.setProgress(10);
    // console.log("next");
    this.setState({loading: true});
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=102a2d9a536447b0bf0ff8cdc5f78128&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.props.setProgress(70);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
    this.props.setProgress(100);
  };

  render() {
    return (
      
      <div className="container my-4">
        <h2 className="my-5 text-center" style={{
          paddingTop: '60px',
        }}>
          E-Newspaper:{" "}
          <span className="text-muted">{`See ${this.capitalize(this.props.category)} Top Headlines `}</span>
        </h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  discription={
                    element.description ? element.description.slice(0, 88) : ""
                  } //basically if else so that diplay proper sliced char for null articles also
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  author={element.author}
                  sourceName={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between ">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
