import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as PostsAPI from '../api-server/posts.js'
import * as CommentsAPI from '../api-server/comments.js'
import * as CategoriesAPI from '../api-server/categories.js'

class App extends Component {
  state= {

  }


  componentDidMount() {
    PostsAPI.getAll(token).then(posts => {
      this.setState({posts: posts})
    })
  }

  render() {

      return (

      )

  }

}

export default App;
