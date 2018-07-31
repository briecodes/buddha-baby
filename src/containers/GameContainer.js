import React, { Component } from 'react';
import { connect } from 'react-redux';
import UUID from 'uuid';

import ObstacleTest from '../components/ObstacleTest';
import FloatingObstacle from '../components/FloatingObstacle';
import { updateBuddhaPosition, endGame } from '../actions/index';
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
    this.insertObstacles2 = window.setInterval(this.addObstacle, 3500);
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
    window.clearInterval(this.insertObstacles);
    window.clearInterval(this.insertObstacles2);
    window.clearInterval(this.positionInterval);
  }

  binaryNum = () => {
    return Math.floor(Math.random() * Math.floor(2));
  };

  elementsArray = () => {
    return ['pig', 'cock', 'snake', 'lotus']
  };

  obstaclesArray = () => {
    return [<ObstacleTest key={UUID()} id={UUID()} float={this.binaryNum()} element={this.elementsArray()[Math.floor(Math.random() * this.elementsArray().length)]} removeMe={this.removeMe}/>, <FloatingObstacle key={UUID()} id={UUID()} removeMe={this.removeMe}/>]
  };

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
      obstacles: [...this.state.obstacles, <ObstacleTest key={UUID()} id={UUID()} float={this.binaryNum()} element={this.elementsArray()[Math.floor(Math.random() * this.elementsArray().length)]} removeMe={this.removeMe}/>]
    });
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

  endGame = () => {
    this.props.dispatch( endGame() );
  };

  render() {
    return (
      <div id='game-container'>
        <span id='end-game' className='x text-button' onClick={this.endGame}>X</span>
        <div id='buddha-baby'></div>
        {this.state.obstacles}
        <div id='game-bg'></div>
      </div>
    );
  };
};

export default connect()(Game);