import React, { Component } from 'react';
import { connect } from 'react-redux';
import UUID from 'uuid';

import ObstacleTest from '../components/ObstacleTest';
import Karma2 from '../components/Karma2';
import Baby from '../components/Baby';
import { location, bounce } from '../actions/index';

class Game extends Component {

  state = {
    obstacles: []
  };

  componentDidMount() {
    this.insertObstacles = window.setInterval(this.addObstacle, 1000);
    this.insertObstacles2 = window.setInterval(this.addObstacle, 3500);

    bounce('.boid');
  };

  componentWillUnmount() {
    window.clearInterval(this.insertObstacles);
    window.clearInterval(this.insertObstacles2);
  }

  binaryNum = () => {
    return Math.floor(Math.random() * Math.floor(2));
  };

  elementsArray = () => {
    return ['pig', 'cock', 'snake', 'lotus']
  };

  removeMe = (id) => {
    // console.log('removing id:', id);
    // console.log('obstacles:', this.state.obstacles);
    let item = this.state.obstacles.find(ele => {
      return ele.props.id === id;
    });
    // console.log('item:', item);
    let index = this.state.obstacles.indexOf(item);
    let tempArr = [...this.state.obstacles]
    tempArr.splice(index, 1);
    if (index > -1) {
      this.setState({
        obstacles: [...tempArr]
      });
    };
  };

  addObstacle = () => {
    this.setState({
      obstacles: [...this.state.obstacles, <ObstacleTest key={UUID()} id={UUID()} float={this.binaryNum()} element={this.elementsArray()[Math.floor(Math.random() * this.elementsArray().length)]} removeMe={this.removeMe}/>]
    });
  };

  render() {
    return (
      <div id='game-container'>
        <Karma2/>
        <Baby/>
        <span id='end-game' className='x text-button' onClick={() => this.props.dispatch(location('home'))}>X</span>
        <div className='boid'></div>
        {this.state.obstacles}
        <div id='game-bg'></div>
      </div>
    );
  };
};

export default connect()(Game);