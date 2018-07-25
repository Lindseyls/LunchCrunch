import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Stars from './common/Stars';
import WaitTime from './common/WaitTime';
import TotalTime from './common/TotalTime';
import MapViewSection from './common/MapViewSection';

class SelectedRestaurantDetail extends Component {

  render() {
    const restaurant = this.props.restaurantData
    const { name, rating, review_count, image_url, popular_times } = this.props.restaurantData;

    return (
      <ScrollView>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.imageStyle}
            source={{ uri: image_url }}
          />
        </View>
        <View style={styles.mapStyle}>
          <MapViewSection restaurant={restaurant} />
        </View>
        <View style={styles.contentStyle}>
          <Text style={styles.headerTextStyle}>{name}</Text>
          <Stars votes={rating} />
          <Text style={styles.reviewCountStyle}>{review_count} reviews</Text>
          <WaitTime times={popular_times} />
          <TotalTime times={popular_times} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 150,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapStyle: {
    flex: 1
  }
});

SelectedRestaurantDetail.propTypes = {
  restaurantData: PropTypes.object,
}

export default SelectedRestaurantDetail;
