import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Stars from './Stars';

const RestaurantDetail = ({ restaurantData }) => {
  const { name, rating, image_url } = restaurantData;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: image_url }}
          />
        </View>
        <View style={styles.contentStyle}>
          <Text style={styles.headerTextStyle}>{name}</Text>
          <Stars votes={rating} />
        </View>
      </CardSection>
    </Card>
  );
};

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
    height: 50,
    width: 50
  }
});

RestaurantDetail.propTypes = {
  restaurantData: PropTypes.object.isRequired
}

export default RestaurantDetail;
