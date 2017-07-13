import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><span>Welcome to React</span></h2>
        </div>
        <p className="App-intro">
          <span>To get started, edit <code>src/App.js</code> and save to reload.</span>
        </p>
      </div>
    );
  }
}

export default App;
