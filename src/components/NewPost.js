import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import {  createPost, resetNewePost, resetNewPost } from '../actions/posts.js';

class PostForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.resetMe();
  }

  componentWillRecieveProps(nextProps) {
    if (nextProps.newPost.post && !nextProps.newPost.error) {
      this.context.router.push('/');
    }
  }

  //Client side validation
  function validate(values) {
    const errors = {};

    if (!values.author || values.author.trim() === '') {
      errors.author = 'Enter an Author';
    }
    if (!values.title || values.title.trim() === '') {
      errors.title = 'Enter a Title';
    }
    if (!values.categories || values.categories.trim() === '') {
      errors.categories = 'Enter categories';
    }
    if (!values.content || values.content.trim() === '') {
      errors.content = 'Enter some content';
    }

    return errors;
  }

  handleSubmit() {
    post = Object.create({}, {
      id: Math.random().toString(36).substr(-8),
      timestamp: Date.now(),
      title: values.title,
      body: values.body,
      author: values.author,
      categories: values.categories,

    })
    this.props.createPost(post);
  }

  render() {
    const { handleSubmit, subitting, newPost } = this.props;

    return (
      <div className="post-container">
        <h2> Create a post:</h2>

        if (newPost && newPost.error && newPost.error.message) {
          return (
            <div className="alert alert-danger">
              {newPost ? newPost.error.message : '' }
            </div>
          );
        }
        <form onSubmit={ handleSubmit }>
          <Field
            name='author'
            type='text'
            component={ renderField }
            label="Author"
          />
          <Field
            name='title'
            type='text'
            component={ renderField }
            label="Title"
          />
          <Field
            name='categories'
            type='text'
            component={ renderField }
            label="Categories"
          />
          <Field
            name='content'
            component={ renderTextArea }
            label="Content"
          />
          <button
            type="submit"
            className='btn btn-primary'
            disabled={ submitting }>
            Submit
          </button>
          <Link to="/" className="btn btn-error">Cancel</Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps = (state, ownProps) =>  {
  return {
    activePost: state.posts.newPost
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createPost: (post) => dispatch(createPost(post))
    resetMe: () => dispatch(resetNewPost())
  }
}

export default reduxForm({
  form: 'PostsForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(PostsForm)
