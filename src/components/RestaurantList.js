import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import RestaurantDisplay from './RestaurantDisplay';

class RestaurantList extends Component {

  render () {
    let restaurants = this.props.restaurants

    return (
      <FlatList
        data={restaurants}
        keyExtractor={restaurants => restaurants.id}
        renderItem={(restaurant) =>
          <RestaurantDisplay
            restaurantData={restaurant.item}
            onItemPressed={() => this.props.onItemSelected(restaurant.item.id)}
          />
        }
      />
    );
  }
}


RestaurantList.propTypes = {
  restaurants: PropTypes.array,
  onItemSelected: PropTypes.func,
}

export default RestaurantList;
