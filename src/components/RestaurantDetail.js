import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, Linking, TouchableHighlight } from 'react-native';

import Stars from './common/Stars';
import MapViewSection from './common/MapViewSection';
import yelplogo from '../img/yelp_review.png';

class SelectedRestaurantDetail extends Component {

  render() {
    const restaurant = this.props.restaurantData
    const { rating, review_count, yelp_url, location, display_phone } = this.props.restaurantData;

    return (
      <View style={styles.contentStyle}>
        <View>
          <MapViewSection restaurant={restaurant} />
        </View>
        <View style={styles.contactStyle}>
          <Text style={styles.fontSize}>{ location[0] },</Text>
          <Text style={styles.fontSize}>{ location[1] }</Text>
          <Text>{ display_phone }</Text>
        </View>
        <View style={styles.yelpInfo}>
          <Stars votes={rating} />
          <Text style={styles.reviewCountStyle}>{review_count} reviews</Text>
        <TouchableHighlight onPress={() => Linking.openURL(`${yelp_url}`)}>
          <Image
            style={styles.thumbnailStyle}
            source={ yelplogo }
          />
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: '#FACDC2',
  },
  contactStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 200,
  },
  textSize: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  yelpInfo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 50,
    margin: 5
  }
});

SelectedRestaurantDetail.propTypes = {
  restaurantData: PropTypes.object,
}

export default SelectedRestaurantDetail;
