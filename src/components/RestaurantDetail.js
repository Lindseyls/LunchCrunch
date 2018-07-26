import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, Linking, TouchableHighlight } from 'react-native';

import Stars from './common/Stars';
import MapViewSection from './common/MapViewSection';
import yelplogo from '../img/yelp_review.png';

class SelectedRestaurantDetail extends PureComponent {

  render() {
    const restaurant = this.props.restaurantData
    const { rating, image_url, review_count, yelp_url, location, display_phone} = this.props.restaurantData;

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
    flex: 1,
    height: 200
  },
  contactStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5
  },
<<<<<<< HEAD
  fontSize: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  phoneStyle: {
    fontSize: 15
=======
  textSize: {
    fontSize: 15,
    justifyContent: 'space-around',
    fontWeight: 'bold'
  },
  phoneSize: {
    fontSize: 15,
>>>>>>> after-freeze-branch
  },
  yelpInfo: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 40
  }
});

SelectedRestaurantDetail.propTypes = {
  restaurantData: PropTypes.object,
}

export default SelectedRestaurantDetail;
