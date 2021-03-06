import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

// copied post componenet and changed to PostForm. got rid of component will mount. got rid of post items in render as well.
// changed export to PostForm.
// got rid of post array also.
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    // I decided to bind "this" in the constructor. need to do it so in the form below you know what to do with "this".
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // this targets name when a change occurs. now you can actually add data to your form.
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    // make the variable for what you want to submit. In this case Post
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  }

  // Call action
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            {/* each of the input values are part of our component state.  */}
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>

          <br />

          <div>
            <label>Body: </label>
            <br />
            <input
              type="text"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.proptypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
