export function startGame() {
  return {
    type: 'START_GAME',
    payload: true
  };
};

export function updateBuddhaPosition(position) {
  return {
    type: 'UPDATE_BUDDHA_POSITION',
    payload: {left: position.left, top: position.top, right: position.right, bottom: position.bottom}
  };
};