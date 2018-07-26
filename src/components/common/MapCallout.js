import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';

class MapCallout extends Component {

  render() {
    const { name, image, location } = this.props

    return (
      <TouchableOpacity onPress={() => Linking.openURL(`maps://app?daddr=${location[0]}+${location[1]}`)}>
      <View>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: image }}
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
    flex: 1,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  title: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
};

MapCallout.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.array,
}

export default MapCallout;
