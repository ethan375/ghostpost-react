import React, { Component } from "react";

class NewPost extends Component {
    state = {
        boast: true,
        post: ""
    }

    handleSubmit = e => {
        let data = {
            boast: this.state.boast,
            body: this.state.post
        }
        console.log(data)
        fetch(`http://localhost:8000/posts/`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    handleChange = e => {
        this.setState({post: e.target.value})
    }

    changeBoast = () => {
        this.setState({boast: !this.state.boast})
    }

    render() {
        return(
            <div className="new-post">
                <form>
                    <p>Roast?<input onChange={this.changeBoast} type="checkbox"></input></p>
                    <textarea onChange={this.handleChange} rows="10" cols="50"></textarea>
                    <p><input onClick={this.handleSubmit} type="submit"></input></p>
                </form>
            </div>
        )
    }
}


export default NewPost;