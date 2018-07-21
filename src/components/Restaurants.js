import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from "react-native";
import { fetchRestaurantAPI } from '../actions';
import { connect } from "react-redux";

import RestaurantList from "./RestaurantList";

class Restaurants extends Component {
  componentDidMount() {
    this.props.fetchRestaurantAPI()
  }

  itemSelectedHandler = id => {
    const selRest = this.props.restaurants.find(place => {
      return place.id === id;
    });
    this.props.navigator.push({
      screen: "lunch-crunch.RestaurantDetail",
      title: selRest.name,
      passProps: {
        restaurantData: selRest
      }
    })
  }

  render() {
    return (
      <View>
        <RestaurantList
          restaurants={this.props.restaurants}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

Restaurants.propTypes = {
  fetchRestaurantAPI: PropTypes.func,
  restaurants: PropTypes.array,
  navigator: PropTypes.funcs
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants.data }
};

export default connect(mapStateToProps, { fetchRestaurantAPI })(Restaurants);
