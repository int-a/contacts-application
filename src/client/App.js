import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles.css";
require("@babel/polyfill");

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  async callBackendAPI() {
    const response = await fetch('/api/contacts');
    const body = await response.json();

    if(response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default (App);