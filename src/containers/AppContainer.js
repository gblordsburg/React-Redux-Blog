import React, { Component } from 'react'
import AppContainer from '../components/App'

export default class App extends Component {
  render() {
    return (
    	<AppContainer>
    	 {this.props.children}
    	</AppContainer>
    );
  }
}
