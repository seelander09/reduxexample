import React, { Component } from "react";

// class component that will fetch data from api.
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  //only called once per comppnent. its called before the initial render.
  componentWillMount() {
    // fetch returns a promise we map that reult to json.
    // then we grab the data and console log it.
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  // next want to create a form to load data into. make in Postform.js
  render() {
    const postItems = this.state.posts.map(post => (
      // if your looping through data in REACT you need a key in REACT.
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>

        {postItems}
      </div>
    );
  }
}

export default Posts;
