import axios from 'axios';
import * as PostsAPI from '../api-server/posts.js';

//Post list
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const RESET_POSTS = 'RESET_POSTS';

//Create new post
export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const RESET_NEW_POST = 'RESET_NEW_POST';

//Validate post fields like Title, Categries on the server
export const VALIDATE_POST_FIELDS = 'VALIDATE_POST_FIELDS';
export const VALIDATE_POST_FIELDS_SUCCESS = 'VALIDATE_POST_FIELDS_SUCCESS';
export const VALIDATE_POST_FIELDS_FAILURE = 'VALIDATE_POST_FIELDS_FAILURE';
export const RESET_POST_FIELDS = 'RESET_POST_FIELDS';

//GET post
export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';
export const RESET_ACTIVE_POST = 'RESET_ACTIVE_POST';

//Delete post
export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
export const RESET_DELETED_POST = 'RESET_DELETED_POST';


// Generate a unique token.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

//Posts
const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3001/' : '/';


export function getPosts = () => dispatch => (
  PostsAPI
  .getAll(token)
  .then((response) => {
    !response.error ? dispatch(getPostsSuccess(response.payload.data)) : dispatch(getPostsFailure(response.payload.data))
  });
)
export function getPostsSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  };
}
export function getPostsFailure(error) {
  return {
    type: GET_POSTS_FAILURE,
    payload: error
  };
}

export function getPostsByCategory = (category) => dispatch => (
  PostsAPI
  .getByCategory(token, category)
  .then((response) => {
    !response.error ? dispatch(getPostsByCategorySuccess(response.payload.data)) : dispatch(getPostsFailure(response.payload.data))
  });
)
export function getPostsByCategorySuccess(posts) {
  return {
    type: GET_POSTS_BY_CATEGORY_SUCCESS,
    payload: posts
  };
}
export function getPostsByCategoryFailure(error) {
  return {
    type: GET_POSTS_BY_CATEGORY_FAILURE,
    payload: error
  };
}

export function getPost = (id) => dipatch => (
  PostsAPI
  .get(token, id)
  .then((response) => {
    if (response.payload.response && response.payload.response.status !=== 200) {
      dispatch(getPostFailure(response.payload.response.data))
    } else {
      dispatch(getPostSuccess(response.payload.data))
    }
  });
)
export function getPostSuccess(activePost) {
  return {
    type: get_POST_SUCCESS,
    payload: activePost
  };
}
export function getPostFailure(error) {
  return {
    type: get_POST_FAILURE,
    payload: error
  };
}
export function resetActivePost() {
  return {
    type: RESET_ACTIVE_POST
  }
}

export function resetPostFields() {
  return {
    type: RESET_POST_FIELDS
  }
}

export function createPost = (newPost) => dipatch => (
  PostsAPI
  .add(token, newPost).then((response) => {
  !response.error ? dispatch(createPostSuccess(response.payload.data)) : dispatch(createPostFailure(response.payload.data))
  });
);
export function createPostSuccess(newPost) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: newPost
  };
}
export function createPostFailure(error) {
  return {
    type: CREATE_POST_FAILURE,
    payload: error
  };
}
export function resetNewPost() {
  return {
    type: RESET_NEW_POST
  }
}

export function deletePost = (id) => dispatch => (
  PostsAPI
  .disable(token, id)
  .then((response) => {
    !response.error ? dispatch(deletPostSuccess(response)) : dispatch(deletePostFailure(response))
  }
))
export function deletePostSuccess(deletedPost) {
  return {
    type: DELETE_POST_SUCCESS,
    payload: deletedPost
  };
}
export function deletePostFailure(response) {
  return {
    type: DELETE_POST_FAILURE,
    payload: response
  };
}
export function resetDeletedPost() {
  return {
    type: RESET_DELETED_POST
  }
}
