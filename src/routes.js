import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import PostsList from './pages/PostsList';
import NewPost from './pages/NewPosts';
import Post from './pages/Post';
import CommentsList from './pages/CommentsList';
import NewComment from './pages/NewComments';
import Comment from './pages/Comment';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Categories} />
    <Route path="/:category/posts/" component={PostsContainer} />
    <Route path="posts/:id" component={PostContainer} />
    <Route path="posts/new" component={NewPost} />
    <Route path="posts/:id/edit" component={EditPost} />
    <Route path="posts/:id/comments" component={CommentsList} />
    <Route path="posts/:id/comments/new" component={NewComment} />
    <Route path="comments/edit" component={EditComment} />
    <Route path="comments/:id" component={ShowComment} />
    <Route path="posts/new" component={NewPost} />
    <Route path="posts/:id" component={Post} />
  </Route>
);
