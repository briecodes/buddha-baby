import React, { Component } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs'

class ObstacleTest extends Component {
  componentDidMount() {
    this.obstacle = document.getElementById(this.props.id);
    this.objectMotion = window.setInterval(this.determineLocation, 0);
    anime({
      targets: `#${this.props.id}`,
      left: -(this.getObjectWidth() * 2),
      duration: 2000,
      easing: 'easeInOutQuad'
    });
  };

  obstacle = '';
  objectMotion = '';

  getObjectWidth = () => {
    return this.obstacle.getBoundingClientRect().right - this.obstacle.getBoundingClientRect().left;
  }

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
      this.props.removeMe(this.props.id);
    };
  };

  render() {
    console.log('id:', this.props.id);
    return (
      <div id={this.props.id} className='obstacle'>{this.props.id}</div>
    );
  };
};

export default connect()(ObstacleTest);