import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const RestaurantDetail = ({ restaurantData }) => {

  const { name, location, image_url } = restaurantData;

  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: image_url }} />
        </View>
        <View style={styles.contentStyle}>
          <Text>{name}</Text>
          <Text>{location[1]}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});

export default RestaurantDetail;
