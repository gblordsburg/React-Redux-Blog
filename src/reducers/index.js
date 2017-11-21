import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import CommentsReducer from './reducer_comments';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  categories: CategoriesReducer, //<-- Categories
  posts: PostsReducer, //<-- Posts
  comments: CommentsReducer,//<-- Comments
  form: formReducer, // <-- redux-form
});

export default rootReducer;
