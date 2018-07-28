import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartScreen from '../components/StartScreen';
import Game from './GameContainer';

class App extends Component {
  render() {
    return (
      <div id='container'>
        <div id='vertical-center'>
          {this.props.gameStart ? <Game/> : <StartScreen /> }
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