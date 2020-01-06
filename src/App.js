import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllPosts from './components/AllPosts'

class App extends React.Component {
  state = {
    data: []
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8000/all-posts/').then(res => res.json()).then(data => this.setState({data: data}))
  }

  render() {
    return (
      <div>
        <AllPosts data={this.state.data}/>
      </div>
    )
  }
}

export default App;
