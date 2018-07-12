import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

class RestaurantList extends Component {

  UNSAFE_componentWillMount() {
    axios.get('http://localhost:3000/restaurants')
    .then(response => console.log(response));

  }

  render () {

    return (

      <View>
        <Text>Restaurant List will go here!</Text>
      </View>
    );
  }
}

export default RestaurantList;
