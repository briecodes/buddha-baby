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
        <span className='text-button' onClick={this.start}>Start Game</span>
        <span className='text-button' onClick={this.displayInstructions}>Instructions</span>
      </React.Fragment>
    );
  };

  renderInstructions = () => {
    return (
      <div>
        Instructions!
        <span className='text-button' onClick={this.displayInstructions}>Close</span>
      </div>
    );
  };

  start = () => {
    console.log('start clicked');
    this.props.dispatch(startGame());
  };

  displayInstructions = () => {
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