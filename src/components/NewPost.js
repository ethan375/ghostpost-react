import React, { Component } from "react";

class NewPost extends Component {
    state = {
        boast: false,
        post: ""
    }

    const handleSubmit = e => {
        if (this.state.post) {
            // going to make a fetch request to our backend
        } else {
            // make a thing about how we cant submit a post with no content in it
        }
    }

    render() {
        return(
            <div className="new-post">
                <form>
                    <input type="checkbox"></input>
                    <input type="textarea"></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}