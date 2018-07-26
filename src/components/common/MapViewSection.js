import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MapCallout from './MapCallout';


class MapViewSection extends PureComponent {

  render() {
    const { latitude, longitude, popular_times, name, image_url, location } = this.props.restaurant;
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
                popular_times={popular_times}
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
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    borderColor: '#414B6B',
    borderWidth: 1,
    borderRadius: 5,
  }
}

MapViewSection.propTypes = {
  restaurant: PropTypes.object,
}

export default MapViewSection;
