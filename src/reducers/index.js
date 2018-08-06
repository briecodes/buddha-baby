const initialState = {
  score: 0,
  buddhaPosition: {left: 0, top: 0, right: 0, bottom: 0},
  buddhaHealth: 'healthy',
  enemies: [],
  gameLevel: 1,
  karma: 50,
  gameStart: false,
  gamePause: false,
  location: 'home'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {...state, gameStart: action.payload};
    case 'UPDATE_BUDDHA_POSITION':
      return {...state, buddhaPosition: action.payload};
    case 'END_GAME':
      return {...state, gameStart: action.payload};
    case 'ADJUST_KARMA':
      return {...state, karma: state.karma + action.payload};
    case 'LOCATION':
      return {...state, location: action.payload};
    case 'RESET_GAME':
      return {...initialState}
    default:
      return state;
  }
};

export default reducer;