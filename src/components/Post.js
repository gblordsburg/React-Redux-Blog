import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getPost, resetActivePost, resetDeletedPost } from '../actions/posts.js';

class Post extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.props.getPost(this.props.id);
  }

  componentWillUnmount() {
    this.props.resetMe();
  }

  render() {
    const { post, loading, error } = this.props.activePost;
    if(loading) {
      return <div className="post-container"><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="error-alert"><h1>Error: {error.message}</div>
    }

    return (
      <div className="post-container">
        <h3>{post.title}</h3>
        <h5>Categories: {post:categories}</h5>
        <p>{post.body}</p>
      </div>
      <div className="comments-container">
        <h6>
    );
  }
}

function mapStateToProps = (state, ownProps) =>  {
  return {
    activePost: state.posts.activePost
    id: ownProps.id
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPost: (id) => dispatch(getPost(id))
    getComments: (id) => dispatch(getComments(id))
    resetMe: () => {
      dispatch(resetActivePost());
      dispatch(resetDeletedPost());

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
