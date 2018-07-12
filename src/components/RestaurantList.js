import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';

import RestaurantDetail from './RestaurantDetail';

class RestaurantList extends Component {
  state = { restaurants: [] };

  UNSAFE_componentWillMount() {
    axios.get('http://localhost:3000/restaurants')
      // .then(response => this.setState({restaurants: response.data}));
      .then((response) => {
          console.log(response.data[0].name);
          this.setState({ restaurants: response.data })
      });
  }

  renderRestaurants() {
    console.log(this.state.restaurants[0])
    this.state.restaurants.map(restaurant =>
      <RestaurantDetail key={restaurant.yelp_id} name={restaurant.name} />
    );
  }

  render () {
    // console.log(this.state.restaurants[0])

    return (
      <View>
        {this.renderRestaurants()}
      </View>
    );
  }
}

export default RestaurantList;
