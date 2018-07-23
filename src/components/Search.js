import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

import SearchBar from './SearchBar';

class Search extends Component {

  itemSearchedHandler = id => {

    console.log(id);
    console.log(this.props.restaurants);

    // const searchRest = this.props.restaurants.find(place => {
    //   return place.id === id;
    // });
    // this.props.navigator.push({
    //   screen: "lunch-crunch.RestaurantDetail",
    //   title: searchRest.name,
    //   passProps: {
    //     restaurantData: searchRest
    //   }
    // })
  }

  render() {

    return (
      <View style={styles.container}>
        <SearchBar restaurantCallback={this.itemSearchedHandler = this.itemSearchedHandler.bind(this)} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FACDC2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
}

Search.propTypes = {
  fetchRestaurantAPI: PropTypes.func,
  restaurants: PropTypes.array,
  // navigator: PropTypes.funcs
}

export default Search;
