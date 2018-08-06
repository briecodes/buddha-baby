import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bounce, resetGame } from '../actions/index';

class EndScreen extends Component {

  render() {
    return (
      <div id='game-container'>

        {this.props.karma === 100 ? <div id='end-w'></div> : <div id='end-l'></div> }
        <div id='play-again' onClick={() => this.props.dispatch(resetGame())}></div>
        <div id='game-bg'></div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    karma: state.karma
  };
};

export default connect(mapStateToProps)(EndScreen);