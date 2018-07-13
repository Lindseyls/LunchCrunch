import React, { Component } from 'react';
import axios from 'axios';
import { View, FlatList } from 'react-native';

import RestaurantDetail from './RestaurantDetail';

const YELP_URL = 'http://localhost:3000/restaurants'

class RestaurantList extends Component {
  state = { restaurants: [] };

  componentDidMount() {
    axios.get(YELP_URL)
      .then(response => this.setState({restaurants: response.data}));
      // .then((response) => {
      //     this.setState({ restaurants: response.data })
      // });
  }

  // renderRestaurants(restaurant) {
  //   return this.state.restaurants.map(restaurant =>
  //     <RestaurantDetail key={restaurant.yelp_id} restaurantData={restaurant} />
  //   );
  // }

  render () {
    return (
      <FlatList
        data={this.state.restaurants}
        keyExtractor={restaurant => restaurant.yelp_id}
        renderItem={({item}) =>
          <View>
            <RestaurantDetail restaurantData={item} />
          </View>
        }
      />
    );
  }
}

export default RestaurantList;
