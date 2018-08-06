import React, { Component } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs'

class Karma2 extends Component {

  componentDidMount() {
    this.changeKarma();
    this.rotateMandala();
  };

  rotateMandala = () => {
    anime({
      targets: '#background-mandala',
      rotate: {
        value: 360,
        delay: 0,
        duration: 18200,
        easing: 'linear'
      },
      loop: true
    });
  };

  changeKarma = () => {
    anime({
      targets: '#filler',
      paddingBottom: this.props.karma + '%'
    });
  };

  render() {
    if (this.props.karma !== 50){ this.changeKarma() }
    return (
      <div id='karma-container2'>
        <div id='circle-outline'>
          <object id='karma-lotus' aria-label='Karma Lotus' data='/images/lotus-karma.svg' type="image/svg+xml"></object>
          <div id='filler'></div>
        </div>
        <object id='background-mandala' aria-label='Decorative Mandala' data='/images/mandala-pattern.svg' type="image/svg+xml"></object>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    karma: state.karma
  };
};

export default connect(mapStateToProps)(Karma2);