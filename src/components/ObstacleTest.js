import React, { Component } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs'

class ObstacleTest extends Component {
  state = {
    position: null
  }
  componentDidMount() {
    this.obstacle = document.getElementById(this.props.id.replace(/-/g, ""));
    this.objectMotion = window.setInterval(this.determineLocation, 50);
    this.setState({
      position: Math.floor(this.getObstaclePosition().left)
    });
    // this.moove();
    anime({
      targets: `#${this.props.id.replace(/-/g, "")}`,
      left: -(this.getObjectWidth() * 2),
      duration: 2000,
      easing: 'easeInOutQuad'
    });
  };

  obstacle = '';
  objectMotion = '';

  moove = () => {
    anime({
      targets: `#${this.props.id.replace(/-/g, "")}`,
      left: -(this.getObjectWidth() * 2),
      duration: 2000,
      easing: 'easeInOutQuad'
    });
  }

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
    console.log('location', Math.floor(this.getObstaclePosition().left));
    if (Math.floor(this.getObstaclePosition().left) < 10) {
      console.log('no problem', this.props.id.replace(/-/g, ""));
      window.clearInterval(this.objectMotion);
      // this.obstacle.remove();
      this.props.removeMe(this.props.id.replace(/-/g, ""));
    }else if (this.state.position === Math.floor(this.getObstaclePosition().left)){
      console.log('the same position!', this.props.id.replace(/-/g, ""));
      window.clearInterval(this.objectMotion);
      this.props.removeMe(this.props.id.replace(/-/g, ""));
    }
  };

  render() {
    return (
      <div id={this.props.id.replace(/-/g, "")} className='obstacle'>{this.props.id.replace(/-/g, "")}</div>
    );
  };
};

export default connect()(ObstacleTest);