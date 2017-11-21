import React, { Component } from 'react';
import Headerr from '../components/Header.js';
import PostsList from '../components/PostsList.js';

class PostsContainer extends Component {

  
  render() {
    return (
      <div>
        <Header type="all_posts"/>
        <PostsList />
      </div>
    );
  }
}


export default PostsContainer;
