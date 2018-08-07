import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartScreen from '../components/StartScreen';
import InstructionsScreen from '../components/InstructionsScreen';
import Game from './GameContainer';
import EndScreen from '../components/EndScreen';

class App extends Component {
  render() {
    return (
      <div id='container'>
        <div id='vertical-center'>
          {this.props.location === 'home' ? <StartScreen/> : null }
          {this.props.location === 'game' ? <Game/> : null }
          {this.props.location === 'instructions' ? <InstructionsScreen/> : null }
          {this.props.location === 'end screen' ? <EndScreen/> : null }
          <div id='note'>&#123; made with love &#125;</div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    gameStart: state.gameStart,
    location: state.location
  };
};

export default connect(mapStateToProps)(App);