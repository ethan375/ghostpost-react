import React, { Component } from 'react'
import Post from './Post'


class AllPosts extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.filterVotes}>Sort by votes</button>
                <button onClick={this.props.filterBoasts}>View only boasts</button>
                <button onClick={this.props.filterRoasts}>View only roasts</button>
                <button onClick={this.props.allPosts}>Shoe all posts</button>
                <ul>
                    {this.props.data.map((post)=> {
                        return <Post post={post} key={post.id}/>
                    })}
                </ul>
             </div>
        )
    }
}


export default AllPosts;