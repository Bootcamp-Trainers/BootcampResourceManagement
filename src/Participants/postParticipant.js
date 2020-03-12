import React, { Component } from "react";
import { connect } from "react-redux";
class PostParticipant extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getTitle.value;
    const data = {
      name
    };
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getName.value = "";
  };
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getName = input)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostParticipant);
