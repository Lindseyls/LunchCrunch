import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';

import WaitTime from './common/WaitTime';
import TotalTime from './common/TotalTime';

class MapCallout extends Component {

  render() {
    const { name, image, location, popular_times } = this.props

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
        <WaitTime times={popular_times} />
        <TotalTime times={popular_times} />
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  thumbnailStyle: {
    flex: 1,
    height: 70,
    width: 100,
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
  popular_times: PropTypes.array
}

export default MapCallout;
