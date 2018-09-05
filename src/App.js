import React, { Component } from 'react';
import { connect } from 'react-redux'

import { updateMainBoatPrice } from './actions/boats'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const buttonClickFunction = (e) => {
      this.props.updateMainBoatPrice('1500')
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
        <button onClick={buttonClickFunction}>test updateMainBoatPrice()</button>
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
  updateMainBoatPrice: (newPrice) => dispatch(updateMainBoatPrice(newPrice))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
