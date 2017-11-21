import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getPosts} from '../actions/posts.js';
import {  getCategories } from '../actions/categories.js';

class PostsList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts, loading, error } = this.props.postsList
    if(loading) {
      return <div className="posts-container"><h1>Posts</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="error-alert"><h1>Error: {error.message}</div>
    }

    let sortedPosts = posts.sort(sortBy('voteScore'));

    return (
      <div>
        <h1>Posts</h1>
        <ul className="list-group">
          {sortedPosts.map((post) => (
            <li className="post-list-item" key={post.id}>
              <Link to={"posts/" + post.id}>
                <h3 className="post-list-item-heading">{post.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps = (state) =>  {
  return postsList: state.postsList
}

function mapDispatchToProps (dispatch) {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Postlist);
