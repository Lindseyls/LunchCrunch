import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { fetchRestaurantAPI } from '../actions';
import { connect } from 'react-redux';


class FilterList extends Component {
  // state = {
  //   setLunchTime: 0
  // }

  componentDidMount() {
    this.props.fetchRestaurantAPI()
  }

  timeFilterHandler = time => {
    console.log(time);
    console.log(this.props.restaurants);

    // let filterRestArray = [];
    // const filterRest = this.props.restaurants.find(place => {
    //   filterRestArray.push(place.popular_times.tota_time_spent < time);
    // });
    //
    // return filterRestArray
  }

  render () {

    return (
      <View>
      </View>
    );
  }
}

FilterList.propTypes = {
  fetchRestaurantAPI: PropTypes.func,
  restaurants: PropTypes.array,
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants.data }
};

export default connect(mapStateToProps, { fetchRestaurantAPI })(FilterList);
