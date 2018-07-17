const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'select_restaurant':
      return action.payload;
    default:
      return state;
  }
};
