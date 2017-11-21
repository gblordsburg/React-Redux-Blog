import PostsForm from '../components/PostsForm.js';
import { resetNewPost } from '../actions/posts';
import { connect } from 'react-redux';


function mapStateToProps = (state, ownProps) =>  {
  return {
    newPost: state.posts.newPost
  }
}

function mapDispatchToProps (dispatch) {
  return {
    resetMe: () => dispatch(resetNewPost());

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
