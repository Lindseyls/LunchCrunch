import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MapCallout from './MapCallout';

class MapViewSection extends PureComponent {

  render() {
    const { latitude, longitude, name, image_url, location } = this.props.restaurant;
    console.log(`Rendering MapViewSection with restauant location: ${latitude}, ${longitude}`)
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
              latitudeDelta: 0.005,
              longitudeDelta:
                Dimensions.get("window").width /
                Dimensions.get("window").height *
                0.005
            }}
          >
            <Marker
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
    height: 250,
    borderColor: '#414B6B',
    borderWidth: 1,
  }
}

MapViewSection.propTypes = {
  restaurant: PropTypes.object,
}

export default MapViewSection;
