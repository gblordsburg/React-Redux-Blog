import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getComment, resetActiveComment, resetDeletedComment } from '../actions/comments.js';

class ShowComment extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.props.getComment(this.props.id);
  }

  componentWillUnmount() {
    this.props.resetMe();
  }

  render() {
    const { comment, loading, error } = this.props.activeComment;
    if(loading) {
      return <div className="post-container"><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="error-alert"><h1>Error: {error.message}</div>
    }

    return (
      <div className="comment-container">
        <p>{comment.author}</p>
        <p>{comment.body}</p>
        <p>{comment.timestam}</p>
        <p>{comment.voteScore}</p>
    );
  }
}

function mapStateToProps = (state, ownProps) =>  {
  return {
    activeComment: state.comments.activeComment
    id: ownProps.id
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getComment: (id) => dispatch(getComment(id)),
    getComments: (id) => dispatch(getComments(id))
    resetMe: () => {
      dispatch(resetActiveComment());
      dispatch(resetDeletedComment());

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowComment);
