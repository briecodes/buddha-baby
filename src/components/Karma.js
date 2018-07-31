import React, { Component } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs'

class Karma extends Component {

  componentDidMount() {
    this.changeKarma();
  };

  changeKarma = () => {
    anime({
      targets: '#karma-filling',
      width: this.props.karma + '%'
    });
  };

  render() {
    if (this.props.karma !== 50){ this.changeKarma() }
    return (
      <div id='karma-container'>
        <span id='karma-title'>Karma: {this.props.karma}%</span>
        <div id='karma-bar'>
          <div id='karma-filling'></div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    karma: state.karma
  };
};

export default connect(mapStateToProps)(Karma);