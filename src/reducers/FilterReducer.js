const initialState = {
  time: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_TIME':
      return {
        ...state,
        time: action.payload
      };
      
    default:
      return state;
  }
};
