import React, { Component } from 'react';
import { connect } from 'react-redux';

class InstructionsScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <div id='instructions-logo'></div>
        <div id='instructions-title'></div>
        <span className='x text-button' onClick={this.props.toggleInstructions}>X</span>
        <div id='clouds'></div>
        <div id='mandala'></div>
      </React.Fragment>
    );
  };
};

export default connect()(InstructionsScreen)