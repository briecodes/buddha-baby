import React, { Component } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs'

class ObstacleTest extends Component {

  componentDidMount() {
    this.obstacle = document.getElementById(this.props.id.replace(/-/g, ""));
    this.objectMotion = window.setInterval(this.determineLocation, 50);
    anime({
      targets: this.obstacle,
      left: -(this.getObjectWidth() * 2),
      duration: 3000,
      easing: 'easeInOutCubic'
    });
  };

  componentWillUnmount() {
    window.clearInterval(this.objectMotion);
  };

  obstacle = '';
  objectMotion = '';

  getObjectWidth = () => {
    return this.obstacle.getBoundingClientRect().right - this.obstacle.getBoundingClientRect().left;
  };

  getObstaclePosition = () => {
    let obstaclePosition = this.obstacle.getBoundingClientRect();
    return {
      left: Math.floor(obstaclePosition.left),
      right: Math.floor(obstaclePosition.right),
      top: Math.floor(obstaclePosition.top),
      bottom: Math.floor(obstaclePosition.bottom)
    };
  };

  determineLocation = () => {
    if (Math.floor(this.getObstaclePosition().left) < 10) {
      window.clearInterval(this.objectMotion);
      this.obstacle.remove();
    };
  };

  render() {
    return (
      <div id={this.props.id.replace(/-/g, "")} className='obstacle'></div>
    );
  };
};

export default connect()(ObstacleTest);