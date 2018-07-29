import React from 'react';

export function startGame() {
  return {
    type: 'START_GAME',
    payload: true
  };
};

export function updateBuddhaPosition(position) {
  return {
    type: 'UPDATE_BUDDHA_POSITION',
    payload: {left: position.left, top: position.top, right: position.right, bottom: position.bottom, height: position.height, width: position.width}
  };
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