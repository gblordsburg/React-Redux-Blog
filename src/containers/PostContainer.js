import React, { Component } from 'react';
import Header from '../components/Header.js';
import Post from '../components/Post.js';

class PostContainer extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    return (
      <div>
        <Header type="post" postId={this.props.params.id}
        <Post id={this.props.params.id} />
        <CommentsList parentId={this.props.params.id}/>
      </div>
    );
  }
}


export default PostsIndex;
