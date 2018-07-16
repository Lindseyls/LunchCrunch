import { FETCH_RESTAURANTS_SUCCESS } from '../actions/constants';

const initialState = [];

export default (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case FETCH_RESTAURANTS_SUCCESS:
      return action.payload
    default:
      return state;
  }
}
