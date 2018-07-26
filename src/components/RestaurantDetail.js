import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, Linking, TouchableHighlight } from 'react-native';

import Stars from './common/Stars';
import WaitTime from './common/WaitTime';
import TotalTime from './common/TotalTime';
import MapViewSection from './common/MapViewSection';
import yelplogo from '../img/yelp_review.png';

class SelectedRestaurantDetail extends Component {

  render() {
    const restaurant = this.props.restaurantData
    const { rating, image_url, review_count, yelp_url, location, display_phone, popular_times } = this.props.restaurantData;

    return (
      <View style={styles.contentStyle}>

        <View>
          <Image
            style={styles.imageStyle}
            source={{ uri: image_url }}
          />
        </View>
        <View style={styles.mapStyle}>
          <MapViewSection restaurant={restaurant} />
        </View>
        <View style={styles.contactStyle}>
          <Text style={styles.textSize}>{ location[0] }</Text>
          <Text style={styles.textSize}>{ location[1] }</Text>
          <Text style={styles.phoneSize}>{ display_phone }</Text>
        </View>
        <View style={styles.waitTimeStyle}>
          <WaitTime style={styles.waitTextStyle} times={popular_times} />
          <TotalTime style={styles.waitTextStyle} times={popular_times} />
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
  imageStyle: {
   height: 150,
   width: "100%",
   justifyContent: 'center',
   alignItems: 'center',
  },
  mapStyle: {
    // flex: 1,
    height: 200
  },
  contactStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 200,
  },
  textSize: {
    fontSize: 18,
    justifyContent: 'space-around',
    fontWeight: 'bold'
  },
  phoneSize: {
    fontSize: 15,
  },
  waitTimeStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 75,
  },
  waitTextStyle: {
    fontSize: 15
  },
  yelpInfo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  }
});

SelectedRestaurantDetail.propTypes = {
  restaurantData: PropTypes.object,
}

export default SelectedRestaurantDetail;
