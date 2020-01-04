import React, { Component } from "react"

class AllPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }


    componentDidMount() {
        fetch("localhost:8000/ghosting/all")
    }
}