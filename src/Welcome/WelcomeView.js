import React, {Component} from 'react'
import {connect} from 'react-redux'
import logo from '../logo.svg';
import '../App.css';

class WelcomeView extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React (value <strong>foo</strong> from <strong>Redux</strong>: <strong>{this.props.foo}</strong>)</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  foo: state.foo,
})

export default connect(mapStateToProps)(WelcomeView)
