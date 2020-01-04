import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    data: []
  }

  componentWillMount() {
    let posts = fetch('http://127.0.0.1:8000/all-posts/').then(res => res.json()).then(data => this.setState({data: data}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
