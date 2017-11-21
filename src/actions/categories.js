import * as CategoriesAPI from '../api-server/categories.js';

//Categories list
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';

// Generate a unique token.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

//Categories
const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3001/' : '/';


export function getCategories = () => dispatch => (
  CategoriesAPI
  .getAll(token)
  .then((response) => {
    !response.error ? dispatch(getCategoriesSuccess(response.payload.data)) : dispatch(getCategoriesFailure(response.payload.data))
  });
)
export function getCategoriesSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: categories
  };
}
export function getCategoriesFailure(error) {
  return {
    type: GET_POSTS_FAILURE,
    payload: error
  };
}
