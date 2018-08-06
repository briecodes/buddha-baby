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
        <div id='start-btn' onClick={this.start}></div>
        <div id='instructions-btn' onClick={this.showInstructions}></div>
        <div id='mandala'></div>
      </div>
    );
  };
};

export default connect()(StartScreen);