import React from 'react';
import { connect } from 'react-redux';

import { startGame } from '../actions';

class StartScreen extends React.Component {
  state = {
    displayInstructions: false
  }

  renderOptions = () => {
    return (
      <React.Fragment>
        <div id='baby-lotus'></div>
        <div id='logo'></div>
        <span id='start-btn' className='text-button' onClick={this.start}>Start Game</span>
        <span id='instructions-btn' className='text-button' onClick={this.toggleInstructions}>Instructions</span>
        <div id='mandala'></div>
      </React.Fragment>
    );
  };

  renderInstructions = () => {
    return (
      <div>
        Instructions!
        <span className='text-button' onClick={this.toggleInstructions}>Close</span>
      </div>
    );
  };

  start = () => {
    this.props.dispatch(startGame());
  };

  toggleInstructions = () => {
    this.setState({
      displayInstructions: !this.state.displayInstructions
    });
  };

  render() {
    return (
      <div id='start-container'>
        {this.state.displayInstructions ? this.renderInstructions() : this.renderOptions() }
      </div>
    );
  };
};

export default connect()(StartScreen);