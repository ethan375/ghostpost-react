import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllPosts from './components/AllPosts'
import NewPost from './components/NewPost'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      view: "home",

    }
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8000/posts/').then(res => res.json()).then(data => this.setState({data: data})).then(x => this.filter())
  }

  filter = () => {
    let data = this.state.data
    let votes = []
    let boasts = []
    let roasts = []

    // let prev = data[0].up_votes - data[0].down_votes
    for(let i=0; i < data.length; i++) {
    //   if(data[i].up_votes - data[i].down_votes >= prev){
    //     votes.push(data[i])
    //     prev = data[i].up_votes - data[i].down_votes
    //   } else {
    //     votes.unshift(data[i])
    //   }



      if(data[i].boast) {
        boasts.push(data[i])
      } else {
        roasts.push(data[i])
      }
    }
    this.setState({boasts: boasts, roasts: roasts, votes: votes})
  }

  filterBoasts = () => {
    this.setState({view: "boasts"})
  }

  filterRoasts = () => {
    this.setState({view: "roasts"})
  }

  showAllPosts = () => {
    this.setState({view: "home"})
  }

  filterVotes = () => {
    this.setState({view: "votes"})
  }

  newPost = () =>{
    this.setState({view: "new post"})
  }

  render() {
    let currentView = null

    if(this.state.view == "home") {
      currentView = <AllPosts data={this.state.data} filterBoasts={this.filterBoasts} filterRoasts={this.filterRoasts} filterVotes={this.filterVotes}/>
    }

    else if(this.state.view == "new post") {
      currentView = <NewPost />
    }

    else if(this.state.view == "boasts") {
      currentView = <AllPosts data={this.state.boasts} filterBoasts={this.filterBoasts} filterRoasts={this.filterRoasts} allPosts={this.showAllPosts} filterVotes={this.filterVotes}/>
    }

    else if (this.state.view == "roasts") {
      currentView = <AllPosts data={this.state.roasts} filterBoasts={this.filterBoasts} filterRoasts={this.filterRoasts} allPosts={this.showAllPosts} filterVotes={this.filterVotes}/>
    }

    else if (this.state.view == "votes") {
      currentView = <AllPosts data={this.state.votes} filterBoasts={this.filterBoasts} filterRoasts={this.filterRoasts} allPosts={this.showAllPosts} filterVotes={this.filterVotes}/>
    }

    return (
      <div>
        <button onClick={this.newPost}>Create a new post</button>
        {currentView}
      </div>
    )
  }
}

export default App;
