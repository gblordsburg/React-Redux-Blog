import {
	GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE, RESET_COMMENTS,
	GET_COMMENT, GET_COMMENT_SUCCESS,
	_COMMENT_FAILURE, RESET_ACTIVE_COMMENT,
	CREATE_COMMENT, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAILURE, RESET_NEW_COMMENT,
	DELETE_COMMENT, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, RESET_DELETED_COMMENT,
  VALIDATE_COMMENT_FIELDS,VALIDATE_COMMENT_FIELDS_SUCCESS, VALIDATE_COMMENT_FIELDS_FAILURE, RESET_COMMENT_FIELDS
} from '../actions/comments.js';

const COMMENTS_INITIAL_STATE = {
	commentsList: {
		comments: [],
		error:null,
		loading: false,
	},
	editComment:{
		post:null,
		error: null,
		loading: false,
	},
	newComment:{
		post:null,
		error: null,
		loading: false,
	},
	activeComment:{
		post:null,
		error:null,
		loading: false,
	},
	deletedComment: {
		post: null,
		error:null,
		loading: false,
	},
};


	export default function comments(state = COMMENTS_INITIAL_STATE, action) {
	  let error;
	  switch(action.type) {

	  case GET_COMMENTS_SUCCESS:// return list of comments and make loading = false
	    return { ...state, commentsList: {comments: action.payload, error:null, loading: false} };
	  case GET_COMMENTS_FAILURE:// return error and make loading = false
	    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
	    return { ...state, commentsList: {comments: [], error: error, loading: false} };
	  case RESET_COMMENTS:// reset commentList to initial state
	    return { ...state,commentsList: {comments: [], error:null, loading: false} };


	  case GET_COMMENT_SUCCESS:
	    return { ...state, activeComment: {comment: action.payload, error:null, loading: false}};
	  case GET_COMMENT_FAILURE:
	    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
	    return { ...state, activeComment: {comment: null, error:error, loading:false}};
	  case RESET_ACTIVE_COMMENT:
	    return { ...state, activeComment: {comment: null, error:null, loading: false}};

	  case CREATE_COMMENT:
	  	return {...state, newComment: {...state.newComment, loading: true}}
	  case CREATE_COMMENT_SUCCESS:
	  	return {...state, newComment: {comment:action.payload, error:null, loading: false}}
	  case CREATE_COMMENT_FAILURE:
	    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
	  	return {...state, newComment: {comment:null, error:error, loading: false}}
	  case RESET_NEW_COMMENT:
	  	return {...state,  newComment:{comment:null, error:null, loading: false}}


	  case DELETE_COMMENT:
	   	return {...state, deletedCOMMENT: {...state.deletedComment, loading: true}}
	  case DELETE_COMMENT_SUCCESS:
	  	return {...state, deletedComment: {comment:action.payload, error:null, loading: false}}
	  case DELETE_COMMENT_FAILURE:
	    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
	  	return {...state, deletedComment: {comment:null, error:error, loading: false}}
	  case RESET_DELETED_COMMENT:
	  	return {...state,  deletedComment:{comment:null, error:null, loading: false}}

	  case VALIDATE_COMMENT_FIELDS:
	    return {...state, newComment:{...state.newComment, error: null, loading: true}}
	  case VALIDATE_COMMENT_FIELDS_SUCCESS:
	    return {...state, newComment:{...state.newComment, error: null, loading: false}}
	  case VALIDATE_COMMENT_FIELDS_FAILURE:
	    let result = action.payload;
	    if(!result) {
	      error = {message: action.payload.message};
	    } else {
	      error = {title: result.title, categories: result.categories, description: result.description};
	    }
	    return {...state, newComment:{...state.newComment, error: error, loading: false}}
	  case RESET_COMMENT_FIELDS:
	    return {...state, newComment:{...state.newComment, error: null, loading: null}}
	  default:
	    return state;
	  }
	}
