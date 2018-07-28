import React, { Component } from 'react';
import { connect } from 'react-redux';

class ObstacleTest extends Component {
  componentDidMount() {
    this.obstacle = document.getElementById('one');
    this.objectMotion = window.setInterval(this.determineLocation, 500);
    this.moveObject();
  };

  obstacle = '';
  objectMotion = '';

  moveObject = () => {
    let left = this.getObstaclePosition().left;
    this.obstacle.style.left = left -= 1;
    window.requestAnimationFrame(this.moveObject);
  };

  getObstaclePosition = () => {
    let obstaclePosition = this.obstacle.getBoundingClientRect();
    return {
      left: obstaclePosition.left,
      right: obstaclePosition.right
    };
  };

  determineLocation = () => {
    if (this.getObstaclePosition().left < 0){
      window.clearInterval(this.objectMotion);
      this.obstacle.remove();
    };
  };

  render() {
    return (
      <div id='one' className='obstacle'></div>
    );
  };
};

export default connect()(ObstacleTest);