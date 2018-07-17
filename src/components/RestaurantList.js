import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurantAPI } from '../actions';
import { View, FlatList } from 'react-native';

import RestaurantDetail from './RestaurantDetail';

class RestaurantList extends Component {

  componentDidMount() {
    this.props.fetchRestaurantAPI()
  }

  render () {
    let restaurants = this.props.restaurants

    return (
      <FlatList
        data={restaurants}
        keyExtractor={restaurants => restaurants.yelp_id}
        renderItem={(restaurant) =>
        <View>
          <RestaurantDetail restaurantData={restaurant.item} />
        </View>
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants.data }
};

export default connect(mapStateToProps, {fetchRestaurantAPI})(RestaurantList);
