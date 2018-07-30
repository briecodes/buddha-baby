import React, { Component } from 'react';
import { connect } from 'react-redux';

class InstructionsScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <div id='instructions-logo'></div>
        <div id='instructions-title'></div>
        <div id='instructions-copy'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
        </div>
        <div id='pig-detail'></div>
        <div id='cock-detail'></div>
        <div id='snake-detail'></div>
        <span className='x text-button' onClick={this.props.toggleInstructions}>X</span>
        <div id='dot-holder'>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
        <div id='clouds'></div>
        <div id='mandala'></div>
      </React.Fragment>
    );
  };
};

export default connect()(InstructionsScreen)