import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { fetchRestaurantAPI } from '../actions';
import { connect } from 'react-redux';

import RestaurantList from './RestaurantList';
import Search from './Search';

class Restaurants extends Component {
  componentDidMount() {
    this.props.fetchRestaurantAPI()
  }

  itemSelectedHandler = id => {
    const selRest = this.props.restaurants.find(place => {
      return place.id === id;
    });
    if (selRest === undefined) {
      return alert(`No restaurant found with id: ${id}`)
    }
    this.props.navigator.push({
      screen: "lunch-crunch.RestaurantDetail",
      title: selRest.name,
      passProps: {
        restaurantData: selRest
      }
    })
  }

  itemSearchedHandler = name => {
    if (name === "") {
      return alert(`Please provide a restaurant name`)
    } else {
      const searchRest = this.props.restaurants.find(place => {
        return place.name.toLowerCase().includes(name.toLowerCase());
      });

      if (searchRest === undefined) {
        return alert(`No restaurant found with name: ${name}`)
      }

      this.props.navigator.push({
        screen: "lunch-crunch.RestaurantDetail",
        title: searchRest.name,
        passProps: {
          restaurantData: searchRest
        }
      })

    }
  }

  restaurantFilter = () => {

  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Search itemSelectedCallback={this.itemSearchedHandler}/>
        </View>
        <Text style={styles.filterText}>Time: {this.props.filter.time} &lt;--</Text>
        <View>
          <RestaurantList
            restaurants={this.props.restaurants}
            onItemSelected={this.itemSelectedHandler}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FACDC2',
  },
  searchContainer: {
    height: '15%'
  },
  filterText: {
    backgroundColor: 'white',
    color: 'black'
  }
}

Restaurants.propTypes = {
  fetchRestaurantAPI: PropTypes.func,
  restaurants: PropTypes.array,
  navigator: PropTypes.object
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    filter: state.filter
  };
};

export default connect(mapStateToProps, { fetchRestaurantAPI })(Restaurants);
