const initialState = {
  score: 0,
  buddhaPosition: {x: 0, y: 0},
  buddhaHealth: 'healthy',
  enemies: [],
  gameLevel: 1,
  gameStart: false,
  gamePause: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {...state, gameStart: action.payload};
    default:
      return state;
  }
};

export default reducer;