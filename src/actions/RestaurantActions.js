import { FETCH_RESTAURANTS_SUCCESS, FETCHING_RESTAURANTS, FETCH_RESTAURANTS_FAILURE } from './constants';
import axios from 'axios';

const YELP_URL = 'https://lunch-crunch-api.herokuapp.com/restaurants'

export const fetchRestaurantAPI = () => {

  return (dispatch) => {
    dispatch(getRestaurants())

    axios.get(YELP_URL)
      // .then(response => {console.log(response.data); return response})
      .then(response => {
        dispatch(getRestaurantsSuccess(response.data))
      })
      .catch(error => {
        dispatch(getRestaurantsFailure(error));
      })
  };
}

const getRestaurants = () => ({
  type: FETCHING_RESTAURANTS
});

const getRestaurantsSuccess = response => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  payload: response
});

const getRestaurantsFailure = error => ({
  type: FETCH_RESTAURANTS_FAILURE,
  error: error
});
