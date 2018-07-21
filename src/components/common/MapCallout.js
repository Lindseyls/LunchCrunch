import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';

class MapCallout extends Component {

  render() {
    const { name, image_url, location } = this.props

    return (
      <TouchableOpacity onPress={() => Linking.openURL(`maps://app?daddr=${location[0]}+${location[1]}`)}>
      <View>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: image_url }}
        />
        <Text style={styles.title}>
          { name }
        </Text>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  thumbnailStyle: {
    height: 55,
    width: 55
  },
  title: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'bold'
  }
};

export {MapCallout}
