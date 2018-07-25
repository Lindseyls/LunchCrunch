import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MapCallout from './MapCallout';

class MapViewSection extends Component {

  render() {
    const { latitude, longitude, popular_times, name, image_url, location } = this.props.restaurant;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
              latitudeDelta: 0.0089,
              longitudeDelta:
                Dimensions.get("window").width /
                Dimensions.get("window").height *
                0.0089
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
    width: "90%",
    height: 300,
    borderColor: '#414B6B',
    borderWidth: 1,
    borderRadius: 5,
    top: 20
  }
}

MapViewSection.propTypes = {
  restaurant: PropTypes.object,
}

export default MapViewSection;
