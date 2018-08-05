import React, { Component } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs'

import { updateBuddhaPosition, endGame, bounce } from '../actions/index';

class Baby extends Component {

  state = {
    bind: false
  }

  componentDidMount() {
    this.buddhaBaby = document.getElementById('buddha-baby');
    window.addEventListener('keydown', this.keyPressHandler);
    this.positionInterval = window.setInterval(this.sendPosition, 5);

    anime({
      targets: this.buddhaBaby,
      translateY: {
        value: '+=5',
        duration: 500,
        easing: 'easeInOutSine'
      },
      direction: 'alternate',
      loop: true,
    });
  };

  componentWillUnmount() {
    window.clearInterval(this.positionInterval);
  }

  buddhaBaby = '';

  sendPosition = () => {
    this.props.dispatch( updateBuddhaPosition( this.getBuddhaBabyPosition() ) );
  };

  getBuddhaBabyPosition = () => {
    let buddhaBabyPosition = this.buddhaBaby.getBoundingClientRect();
    return {width: Math.floor(buddhaBabyPosition.width), height: Math.floor(buddhaBabyPosition.height), left: Math.floor(buddhaBabyPosition.left), top: Math.floor(buddhaBabyPosition.top), right: Math.floor(buddhaBabyPosition.right), bottom: Math.floor(buddhaBabyPosition.bottom), y: Math.floor(buddhaBabyPosition.y), x: Math.floor(buddhaBabyPosition.x)}
  };

  jump = () => {
    anime({
      targets: this.buddhaBaby,
      translateY: {
        value: `-=${this.getBuddhaBabyPosition().height * 2.5}`,
        duration: 250,
        easing: 'easeInOutSine'
      },
      direction: 'alternate',
      loop: 1,
      complete: () => {
        this.setState({ bind: false })
      }
    });
  };

  keyPressHandler = (e) => {
    if (e.keyCode === 32 && this.state.bind !== true){
      this.setState({
        bind: true
      });
      this.jump();
    };
  };
  
  render() {
    return (
      <div id='buddha-baby'></div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    karma: state.karma
  };
};

export default connect(mapStateToProps)(Baby);