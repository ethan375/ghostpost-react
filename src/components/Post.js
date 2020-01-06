import React, { Component } from "react"

class Post extends React.Component {

    handleDownvote(e) {
        e.preventDefault()
        console.log('this is a thing that is working')
    }
    
    render() {
        return(
            <div className="post">
                <h4 className={this.props.post.boast ? "boast" : "roast"}>{this.props.post.boast ? "boast" : "roast"}</h4>
                <p>{this.props.post.body}</p>
                <p>{this.props.post.like}</p>
                <p>Votes: {this.props.post.up_votes - this.props.post.down_votes}</p>
                <p>Created at: {this.props.post.creation_time}</p>
                <button className="vote" onClick={this.handleUpvote}>Vote up</button>
                <button className="vote" onClick={this.handleDownvote}>Vote Down</button>
            </div>
        )
    }
}

export default Post; 