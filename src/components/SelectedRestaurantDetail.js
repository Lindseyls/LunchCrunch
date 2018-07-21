import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import Stars from './common/Stars';
import WaitTime from './common/WaitTime';

class SelectedRestaurantDetail extends Component {
  
  render() {
    const { name, rating, review_count, image_url, popular_times } = this.props.restaurantData;

    return (
      <View>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: image_url }}
        />
      </View>
      <View style={styles.contentStyle}>
        <Text style={styles.headerTextStyle}>{name}</Text>
        <Stars votes={rating} />
        <Text style={styles.reviewCountStyle}>{review_count} reviews</Text>
        <WaitTime times={popular_times} />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

SelectedRestaurantDetail.propTypes = {
  restaurantData: PropTypes.object.isRequired,
}

export default SelectedRestaurantDetail;
