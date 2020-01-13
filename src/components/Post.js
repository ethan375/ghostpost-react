import React, { Component } from "react"

class Post extends React.Component {


    handleUpVote(e) {
        e.preventDefault()
        let id = e.target.parentElement.children[7].innerHTML
        fetch(`http://localhost:8000/posts/${id}/upvote`).then(data => data.json()).then(res => window.location.reload())
    }

    handleDownvote(e) {
        e.preventDefault()
        let id = e.target.parentElement.children[7].innerHTML
        fetch(`http://localhost:8000/posts/${id}/downvote`).then(res => res.json()).then(data => window.location.reload())
    }

    
    render() {
        return(
            <div className="post">
                <h4 className={this.props.post.boast ? "boast" : "roast"}>{this.props.post.boast ? "boast" : "roast"}</h4>
                <p>{this.props.post.body}</p>
                <p>{this.props.post.like}</p>
                <p>Votes: {this.props.post.up_votes - this.props.post.down_votes}</p>
                <p>Created at: {this.props.post.creation_time}</p>
                <button className="vote" onClick={this.handleUpVote}>Vote up</button>
                <button className="vote" onClick={this.handleDownvote}>Vote Down</button>
                <i className="id">{this.props.post.id}</i>
            </div>
        )
    }
}

export default Post; 