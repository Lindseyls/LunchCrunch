import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Stars from './common/Stars';
import WaitTime from './common/WaitTime';

class RestaurantDetail extends Component {

  render () {
    console.log(this.props.restaurantData)
    return (
        <Text>{this.props.restaurantData.item.name}</Text>
    )

  // const { name, rating, review_count, image_url, popular_times } = restaurantData;

  // return (
  //   <Card>
  //     <CardSection>
  //       <View style={styles.thumbnailContainerStyle}>
  //         <Image
  //           style={styles.thumbnailStyle}
  //           source={{ uri: image_url }}
  //         />
  //       </View>
  //       <View style={styles.contentStyle}>
  //         <Text style={styles.headerTextStyle}>{name}</Text>
  //         <Stars votes={rating} />
  //         <Text style={styles.reviewCountStyle}>{review_count} reviews</Text>
  //         <WaitTime times={popular_times} />
  //       </View>
  //     </CardSection>
  //   </Card>
  // );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 55,
    width: 55
  },
  reviewCountStyle: {
    position: 'relative'
  }
});

RestaurantDetail.propTypes = {
  restaurantData: PropTypes.object.isRequired
}

export default RestaurantDetail;
