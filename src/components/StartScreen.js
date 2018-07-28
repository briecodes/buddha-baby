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
        <span className='text-button' onClick={this.toggleInstructions}>Instructions</span>
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