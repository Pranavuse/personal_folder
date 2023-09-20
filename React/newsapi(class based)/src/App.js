
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default class App extends Component {
  state={
    progress:'0'
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar title="E-Newspaper"/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  key='general' pageSize={8} country="in" category="general"/>}></Route>
          <Route exact path="/Business" element={ <News setProgress={this.setProgress}  key='business'  pageSize={8} country="in" category="business"/>}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress}  key='entertainment'  pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route exact path="/Health" element={ <News setProgress={this.setProgress}  key='health'  pageSize={8} country="in" category="health"/>}></Route>
          <Route exact path="/Science" element={ <News setProgress={this.setProgress}  key='science'  pageSize={8} country="in" category="science"/>}></Route>
          <Route exact path="/Sports" element={ <News setProgress={this.setProgress}  key='sports'  pageSize={8} country="in" category="sports"/>}></Route>
          <Route exact path="/Technology" element={ <News setProgress={this.setProgress}   key='technology}>' pageSize={8} country="in" category="technology"/>}></Route>

        </Routes>
        </Router>
      </div>
    )
  }
}






