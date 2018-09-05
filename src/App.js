import React, { Component } from 'react';
import { connect } from 'react-redux'

import { updateBoatPrice } from './actions/boats'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const buttonClickFunction = (e) => {
      this.props.updateBoatPrice()
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={buttonClickFunction}>test updateBoatPrice()</button>
        <p>this.props: </p>
        <div>
          { JSON.stringify(this.props) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  updateBoatPrice: () => dispatch(updateBoatPrice())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
