import React, { Component } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs'

import { elementFiller } from '../actions/index';

class FloatingObstacle extends Component {

  componentDidMount() {
    this.obstacle = document.getElementById(this.props.id.replace(/-/g, ""));
    this.objectMotion = window.setInterval(this.determineLocation, 50);
    this.collsionInterval = window.setInterval(this.checkSmallBoxes, 5);

    anime({
      targets: this.obstacle,
      left: -(this.getObjectWidth() * 2),
      duration: 3000,
      easing: 'easeInOutCubic'
    });
  };

  componentWillUnmount() {
    this.clearAllIntervals();
  };

  clearAllIntervals = () => {
    window.clearInterval(this.objectMotion);
    window.clearInterval(this.collsionInterval);
  }

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
      bottom: Math.floor(obstaclePosition.bottom),
      height: Math.floor(obstaclePosition.height),
      width: Math.floor(obstaclePosition.width)
    };
  };

  determineLocation = () => {
    if (Math.floor(this.getObstaclePosition().left) < 10) {
      this.clearAllIntervals();
      this.obstacle.remove();
    };
  };

  checkSmallBoxes = () => {
    let boxes = this.obstacle.childNodes;
    for (const element of boxes){
      this.genericCollisionDetection(element);
    };
  };

  genericCollisionDetection = (element) => {
    let elPos = element.getBoundingClientRect();
    if (elPos.top >= this.props.buddhaPosition.top && elPos.bottom <= this.props.buddhaPosition.bottom && elPos.left >= this.props.buddhaPosition.left && elPos.right <= this.props.buddhaPosition.right) {
      this.clearAllIntervals();
      this.obstacle.remove();
    };
  };

  render() {
    return (
      <div id={this.props.id.replace(/-/g, "")} className='floating-obstacle'>
        {elementFiller()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    buddhaPosition: state.buddhaPosition
  };
};

export default connect(mapStateToProps)(FloatingObstacle);