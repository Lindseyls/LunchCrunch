import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { fetchRestaurantAPI } from '../actions';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';

class Search extends Component {
  componentDidMount() {
    this.props.fetchRestaurantAPI()
  }

  itemSearchedHandler = id => {
    const searchRest = this.props.restaurants.find(place => {
      return place.id === id;
    });
    this.props.navigator.push({
      screen: "lunch-crunch.RestaurantDetail",
      title: searchRest.name,
      passProps: {
        restaurantData: searchRest
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          restaurantCallback={this.itemSearchedHandler}
        />
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

const mapStateToProps = state => {
  return { restaurants: state.restaurants.data }
};

export default connect(mapStateToProps, { fetchRestaurantAPI })(Search);
