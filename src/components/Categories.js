import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getCategories } from '../actions/categories.js';

class Categories extends Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { categories, loading, eror } = this.props.categoriesList
    if(loading) {
      return <div className="categories-container"><h1>Categories</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="error-alert"><h1>Error: {error.message}</div>
    }

    let sortedCatgories = categories.sort(sortBy('name'));

    return (
      <div>
        <h1>Posts</h1>
        <ul className="categoires-list-container">
          {sortedCategories.map((category) => (
            <li className="categorie-list-item" key={category.name}>
              <Link to={category.name + "/posts"}>
                <h3 className="categorie-list-item-heading">{category.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps = (state) =>  {
  return categoriesList: state.categoriesList
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
