import React, { Component } from 'react';
import { connect } from 'react-redux';
import UUID from 'uuid';

import ObstacleTest from '../components/ObstacleTest';
import { updateBuddhaPosition } from '../actions/index';
import anime from 'animejs'

class Game extends Component {

  state = {
    obstacles: [],
    bind: false
  };

  componentDidMount() {
    this.buddhaBaby = document.getElementById('buddha-baby');
    window.addEventListener('keydown', this.keyPressHandler);
    this.insertObstacles = window.setInterval(this.addObstacle, 1000);
    this.positionInterval = window.setInterval(this.sendPosition, 5);
  };

  componentWillUnmount() {
    window.clearInterval(this.insertObstacles);
    window.clearInterval(this.positionInterval);
  }

  buddhaBaby = '';
  i = 0;

  sendPosition = () => {
    this.props.dispatch( updateBuddhaPosition( this.getBuddhaBabyPosition() ) );
  };

  removeMe = (id) => {
    let item = this.state.obstacles.find(ele => {
      return ele.props.id === id;
    });
    let index = this.state.obstacles.indexOf(item);
    if (index > -1) {
      this.setState({
        obstacles: [...this.state.obstacles.splice(index, 1)]
      });
    };
  };

  addObstacle = () => {
    this.setState({
      obstacles: [...this.state.obstacles, <ObstacleTest key={UUID()} id={UUID()} removeMe={this.removeMe}/>]
    });
  };

  getBuddhaBabyPosition = () => {
    let buddhaBabyPosition = this.buddhaBaby.getBoundingClientRect();
    return {left: Math.floor(buddhaBabyPosition.left), top: Math.floor(buddhaBabyPosition.top), right: Math.floor(buddhaBabyPosition.right), bottom: Math.floor(buddhaBabyPosition.bottom), y: Math.floor(buddhaBabyPosition.y), x: Math.floor(buddhaBabyPosition.x)}
  };

  jump = () => {
    anime({
      targets: this.buddhaBaby,
      translateY: {
        value: '-=150',
        duration: 250,
        easing: 'easeInOutSine'
      },
      direction: 'alternate',
      loop: 1,
      complete: () => this.setState({ bind: false })
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
      <div id='game-container'>
        <div id='buddha-baby'></div>
        {this.state.obstacles}
      </div>
    );
  };
};

export default connect()(Game);