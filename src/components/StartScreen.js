import React from 'react';
import { connect } from 'react-redux';

import { location } from '../actions';
import anime from 'animejs'

class StartScreen extends React.Component {

  componentDidMount() {
    let buddhaBaby = document.getElementById('baby-lotus');

    anime({
      targets: buddhaBaby,
      translateY: {
        value: '+=5',
        duration: 1000,
        easing: 'easeInOutSine'
      },
      direction: 'alternate',
      loop: true,
    });
  };

  start = () => {
    this.props.dispatch(location('game'));
  };

  showInstructions = () => {
    this.props.dispatch(location('instructions'));
  };

  render() {
    return (
      <div id='start-container'>
        <div id='baby-lotus'></div>
        <div id='logo'></div>
        <span id='start-btn' className='text-button' onClick={this.start}>Start Game</span>
        <span id='instructions-btn' className='text-button' onClick={this.showInstructions}>Instructions</span>
        <div id='mandala'></div>
      </div>
    );
  };
};

export default connect()(StartScreen);