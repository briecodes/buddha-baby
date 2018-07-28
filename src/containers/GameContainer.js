import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {

  componentDidMount() {
    this.buddhaBaby = document.getElementById('buddha-baby');
    window.addEventListener('keydown', this.keyPressHandler)
  };

  buddhaBaby = '';

  getBuddhaBabyPosition = () => {
    let buddhaBabyPosition = this.buddhaBaby.getBoundingClientRect();
    console.log('bb:', buddhaBabyPosition.top, buddhaBabyPosition.right, buddhaBabyPosition.bottom, buddhaBabyPosition.left);
  };

  keyPressHandler = (e) => {
    if (e.keyCode === 32){
      this.getBuddhaBabyPosition();
    };
  };

  render() {
    return (
      <div id='game-container'>
        <div id='buddha-baby'></div>
      </div>
    );
  };
};

export default connect()(Game);