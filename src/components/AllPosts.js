import React, { Component } from 'react'
import Post from './Post'


class AllPosts extends React.Component {
    render() {
        return (
             <ul>
                 {this.props.data.map((post)=> {
                     return <Post post={post} />
                 })}
             </ul>
        )
    }
}


export default AllPosts;