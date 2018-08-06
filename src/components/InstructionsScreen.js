import React, { Component } from 'react';
import { connect } from 'react-redux';

class InstructionsScreen extends Component {
  state = {
    sideA: true
  };

  swopSide = () => {
    this.setState({
      sideA: !this.state.sideA
    });
  };

  renderSideA = () => {
    return (
      <React.Fragment>
        <div id='pig-detail'></div>
        <div id='cock-detail'></div>
        <div id='snake-detail'></div>
        <div id='dot-holder'>
          <div className='dot on'></div>
          <div className='dot off' onClick={this.swopSide}></div>
        </div>
      </React.Fragment>
    );
  };

  renderSideB = () => {
    return (
      <React.Fragment>
        <div id='lotus-detail'></div>
        <div id='dot-holder'>
          <div className='dot off' onClick={this.swopSide}></div>
          <div className='dot on'></div>
        </div>
      </React.Fragment>
    );
  };



  render() {
    return (
      <React.Fragment>
        <span className='x text-button' onClick={this.props.toggleInstructions}>X</span>
        <div id='instructions-logo'></div>
        <div id='instructions-title'></div>
        <div id='instructions-copy'>
        Use the SPACEBAR to jump and collect Lotus flowers while avoiding Piggies, Cocks, and Snakes–as cute as they may be!
        </div>

        {this.state.sideA ? this.renderSideA() : this.renderSideB()}

        <div id='clouds'></div>
        <div id='mandala'></div>
      </React.Fragment>
    );
  };
};

export default connect()(InstructionsScreen)