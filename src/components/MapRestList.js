import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MapCallout from './common/MapCallout';

class MapRestList extends Component {

  render() {
    const { name, image_url, location, latitude, longitude } = this.props.restaurant;

    return (
      <TouchableWithoutFeedback>
        <Marker
          style={styles.marker}
          coordinate={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
          }}
        >
          <MapView.Callout>
            <MapCallout
            name={name}
            image={image_url}
            location={location}
            />
          </MapView.Callout>
        </Marker>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  }
}

MapRestList.propTypes = {
  restaurant: PropTypes.array,
}

export default MapRestList;
