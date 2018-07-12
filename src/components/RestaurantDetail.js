import React from 'react';
import { View, Text } from 'react-native';

const RestaurantDetail = (props) => {
  return (
    <View>
      console.log(props.name)
      <Text>{props.name}</Text>
    </View>
  );
};

export default RestaurantDetail;
