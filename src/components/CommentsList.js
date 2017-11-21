import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {  getComments, resetActiveComments, resetDeletedComments } from '../actions/comments.js';

class CommentsList extends Component {

  ComponentDidMount() {
    this.props.getComments(this.props.parentid)
  }

  componentWillUnmount() {
    this.props.resetMe();
  }

  render() {
    const { comments, loading, error } = this.props.commentsList
    if(loading) {
      return <div className="comments-container"><h1>Comments</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="error-alert"><h1>Error: {error.message}</div>
    }

    let sortedComments = comments.sort(sortBy('voteScore'));

    return (
      <div>
        <h3>Comments</h3>
        <ul className="list-group">
          {sortedComments.map((comment) => (
            <li className="comment-list-item" key={comment.id}>
              <Link to={"comments/" + comment.id}>
                <h3 className="comment-list-item-heading">{comment.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps = (state, ownProps) =>  {
  return {
    CommentsList: state.posts.CommentsList
    parenttId: ownProps.parentId
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getComments: (id) => dispatch(getComments(id))
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsLists);
