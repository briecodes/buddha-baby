import React from 'react';
import anime from 'animejs'

export function startGame() {
  return {
    type: 'START_GAME',
    payload: true
  };
};

export function endGame() {
  return {
    type: 'END_GAME',
    payload: false
  };
};

export function adjustKarma(num) {
  return {
    type: 'ADJUST_KARMA',
    payload: num
  };
};

export function updateBuddhaPosition(position) {
  return {
    type: 'UPDATE_BUDDHA_POSITION',
    payload: {left: position.left, top: position.top, right: position.right, bottom: position.bottom, height: position.height, width: position.width}
  };
};

export function bounce(element) {
  anime({
    targets: [element],
    translateY: {
      value: '+=5',
      duration: 550,
      easing: 'easeInOutSine'
    },
    direction: 'alternate',
    loop: true,
  });
};

export function elementFiller() {
  return (
    <React.Fragment>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>

      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>

      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>

      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>
      <div className='third'></div>

      <div className='divider'></div>
    </React.Fragment>
  );
};