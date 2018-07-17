import { combineReducers } from 'redux';
import RestaurantReducer from './RestaurantReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  restaurants: RestaurantReducer,
  selectedRestaurantId: SelectionReducer
});
