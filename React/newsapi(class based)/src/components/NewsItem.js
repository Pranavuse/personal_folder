import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let {title, discription, imageUrl, newsUrl, author, date, sourceName} = this.props;
    return (
      <div>
        <div className="card">
        <div>
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{
          zIndex:'1', left: '90%'
        }}>
    {sourceName}
    
  </span>

        </div>
          <img src={!imageUrl? "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1691367993/230806-zuck-elon-fight-tease_lrxsjg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<br></br><span class=" my-2 badge rounded-pill bg-dark">{sourceName}</span></h5>
            <p className="card-text">
              {discription}...
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">
              Read More
            </a>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>

          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
