import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartScreen from '../components/StartScreen';

class App extends Component {
  render() {
    return (
      <div id='container'>
        <div id='vertical-center'>
          {this.props.gameStart ? 'null' : <StartScreen /> }
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    gameStart: state.gameStart
  };
};

export default connect(mapStateToProps)(App);