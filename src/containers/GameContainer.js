import React, { Component } from 'react';
import { connect } from 'react-redux';
import UUID from 'uuid';

import ObstacleTest from '../components/ObstacleTest';

class Game extends Component {

  state = {
    obstacles: []
  };

  componentDidMount() {
    this.buddhaBaby = document.getElementById('buddha-baby');
    window.addEventListener('keydown', this.keyPressHandler);
    this.insertObstacles = window.setInterval(this.addObstacle, 1000);
  };

  componentWillUnmount() {
    window.clearInterval(this.insertObstacles);
  }

  buddhaBaby = '';

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
    // console.log('removing... state:', this.state.obstacles);
  };

  addObstacle = () => {
    // console.log('adding obstacle');
    this.setState({
      obstacles: [...this.state.obstacles, <ObstacleTest key={UUID()} id={UUID()} removeMe={this.removeMe}/>]
    });
    console.log('total:', this.state.obstacles.length);
  };

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
        {this.state.obstacles}
      </div>
    );
  };
};

export default connect()(Game);