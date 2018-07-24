import { combineReducers } from 'redux';
import RestaurantReducer from './RestaurantReducer';
import FilterReducer from './FilterReducer';

export default combineReducers({
  restaurants: RestaurantReducer,
  filter: FilterReducer
});
