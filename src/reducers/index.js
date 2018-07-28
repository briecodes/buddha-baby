const initialState = {
  key: 'value'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOME_NAME':
      return {...state, key: action.payload.key};
    default:
      return state;
  };
};

export default reducer;