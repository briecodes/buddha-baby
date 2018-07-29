const initialState = {
  score: 0,
  buddhaPosition: {left: 0, top: 0, right: 0, bottom: 0},
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
    case 'UPDATE_BUDDHA_POSITION':
      return {...state, buddhaPosition: action.payload};
    case 'END_GAME':
      return {...state, gameStart: action.payload}
    default:
      return state;
  }
};

export default reducer;