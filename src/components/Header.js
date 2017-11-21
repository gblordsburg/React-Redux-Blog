import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, resetDeletedPost, deletePost, deletePostSuccess, deletePostFailure } from '../actions/posts';
import Header from '../components/header.js';


/*content pulled from https://github.com/rajaraodv/react-redux-blog/blob/master/public/src/components/header.js
as template and inspiration for this app. Some features were then modified to work with this app or were removed
all togeter. The code that was used as is from the source will be attributed accordingly. If anything is missed
please highlight the unaccredited code so I can attribute it to the proper person/source*/

class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  static propTypes = {
    onDeleteClick: ProptTypes.func
  };

  componentDidMount() {
    this.props.
  }
  //pulled whole from source and unchanged yet
  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.deletedPost.error && nextProps.deletedPost.error.message) {//delete failure
      alert(nextProps.deletedPost.error.message || 'Could not delete. Please try again.');
    } else if(nextProps.deletedPost.post && !nextProps.deletedPost.error) {//delete success
      this.context.router.push('/');
    }
  }

render() {
  const { type } = this.props;
  if (type === 'posts') {
    return (
      <div className="container">
          <ul className="nav  nav-pills navbar-right">
      			<li style={{paddingRight: '10px'}} role="presentation">
      				<Link style={{color:'#337ab7',  fontSize: '17px'}} to="/posts/new">
      				New Post
    					</Link>
            </li>
    			</ul>
      </div>
  	);
  } else if (type === 'post') {
    return (
      <div className="container">
  			<ul className="nav  nav-pills navbar-left">
    			<li style={{paddingRight: '10px'}} style={{color:'#337ab7',  fontSize: '17px'}}  role="presentation"><Link to="/">Back To Index</Link></li>
  			</ul>

  			<div className="navbar-form navbar-right" style={{paddingRight: '50px'}}>
    			<button className="btn btn-warning pull-xs-right"  onClick={()=> {onDeleteClick()}}>Delete Post</button>
    	</div>
    );
  } else if (type === 'new_post') {
    return (
        <div className="container">
          <ul className="nav  nav-pills navbar-left">
      			<li style={{paddingRight: '10px'}} role="presentation">
      				<Link className="text-xs-right"  style={{color:'#337ab7',  fontSize: '17px'}}  to="/">Back To Index</Link>
      			</li>
    			</ul>
        </div>
  		 );  		
  	}
}

}

function mapStateToProps(state, ownProps) {
  return {
    deletedPost: state.posts.deletedPost,
    postId: ownProps.postId
  };
}

function mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	 onDeleteClick: () => dispatch(deletePost(ownProps.postId));
     resetMe: () => dispatch(resetDeletedPost());
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
