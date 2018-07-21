import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MapCallout from './MapCallout';

class MapViewSection extends Component {

  render() {
    const { latitude, longitude, name, image_url, location } = this.props.restaurant;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0122,
              longitudeDelta:
                Dimensions.get("window").width /
                Dimensions.get("window").height *
                0.0122
            }}
          >
            <Marker
              coordinate={{
                latitude: latitude, longitude: longitude
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
          </MapView>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
}

MapViewSection.propTypes = {
  restaurant: PropTypes.object.isRequired,
}

export default MapViewSection;
