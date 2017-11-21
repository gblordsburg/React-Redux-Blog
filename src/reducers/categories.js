import {
	GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE
} from '..actions/categories.js';

const CATEGORIES_INITIAL_STATE = {
  categoriesList:  {
    categories: [],
    error:null,
    loading: true,
  }
}

export default function categories(state=CATEGORIES_INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case GET_CATEGORIES_SUCCESS:// return list of categories and make loading = false
      return { ...state, categoriesList: {categories: action.payload, error:null, loading: false} };
    case GET_CATEGORIES_FAILURE:// return error and make loading = false
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, categoriesList: {categories: [], error: error, loading: false} };
    case RESET_CATEGORIES:// reset categoriesList to initial state
      return { ...state, categoriesList: {categories: [], error:null, loading: false} };
    default:
    return state;
  }
}
