import axios from 'axios';
import * as CommentsAPI from '../api-server/posts.js';

//Comment list
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';
export const RESET_COMMENTS = 'RESET_COMMENTS';

//Create new Comment
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
export const RESET_NEW_COMMENT = 'RESET_NEW_COMMENT';

//Validate Comment fields like Title, Categries on the server
export const VALIDATE_COMMENT_FIELDS = 'VALIDATE_COMMENT_FIELDS';
export const VALIDATE_COMMENT_FIELDS_SUCCESS = 'VALIDATE_COMMENT_FIELDS_SUCCESS';
export const VALIDATE_COMMENT_FIELDS_FAILURE = 'VALIDATE_COMMENT_FIELDS_FAILURE';
export const RESET_COMMENT_FIELDS = 'RESET_COMMENT_FIELDS';

//Fetch Comment
export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const GET_COMMENT_FAILURE = 'GET_COMMENT_FAILURE';
export const RESET_ACTIVE_COMMENT = 'RESET_ACTIVE_COMMENT';

//Delete Comment
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
export const RESET_DELETED_COMMENT = 'RESET_DELETED_COMMENT';


export function getComments = (parentId) => dispatch => (
  CommentsAPI
  .getByParent(token, parentId)
  .then((response) => {
    !response.error ? dispatch(getCommentsSuccess(response.payload.data)) : dispatch(getCommentsFailure(response.payload.data))
  });
)

export function getCommentsSuccess(comments) {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: comments
  };
}

export function getCommentsFailure(error) {
  return {
    type: GET_COMMENTS_FAILURE,
    payload: error
  };
}


export function getComment = (id) => dispatch => (
  CommentsAPI
  .get(token, id)
  .then((response) => {
    !response.error ? dispatch(getCommentSuccess(response.payload.data)) : dispatch(getCommentFailure(response.payload.data))
  });
)

export function getCommentSuccess(activeComment) {
  return {
    type: GET_COMMENT_SUCCESS,
    payload: activeComment
  };
}

export function getCommentFailure(error) {
  return {
    type: GET_COMMENT_FAILURE,
    payload: error
  };
}

export function resetActiveComment() {
  return {
    type: RESET_ACTIVE_COMMENT
  }
}

export function createComment =(props, tokenFromStorage) {
  const request = axios({
    method: 'comment',
    data: props,
    url: `${ROOT_URL}/comments`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_COMMENT,
    payload: request
  };
}

export function createCommentSuccess(newComment) {
  return {
    type: CREATE_COMMENT_SUCCESS,
    payload: newComment
  };
}

export function createCommentFailure(error) {
  return {
    type: CREATE_COMMENT_FAILURE,
    payload: error
  };
}

export function resetNewComment() {
  return {
    type: RESET_NEW_COMMENT
  }
}
;

export function resetDeletedComment() {
  return {
    type: RESET_DELETED_COMMENT
  }
}


export function deleteComment = (id) => dispatch => (
  CommentsAPI
  .
)

export function deleteCommentSuccess(deletedComment) {
  return {
    type: DELETE_COMMENT_SUCCESS,
    payload: deletedComment
  };
}

export function deleteCommentFailure(response) {
  return {
    type: DELETE_COMMENT_FAILURE,
    payload: response
  };
}

export function validateCommentFields(props) {
  //note: we cant have /comments/validateFields because it'll match /comments/:id path!
  const request = axios.comment(`${ROOT_URL}/comments/validate/fields`, props);

  return {
    type: VALIDATE_COMMENT_FIELDS,
    payload: request
  };
}

export function validateCommentFieldsSuccess() {
  return {
    type: VALIDATE_COMMENT_FIELDS_SUCCESS
  };
}

export function validateCommentFieldsFailure(error) {
  return {
    type: VALIDATE_COMMENT_FIELDS_FAILURE,
    payload: error
  };
}

export function resetCommentFields() {
  return {
    type: RESET_COMMENT_FIELDS
  }
}+6
