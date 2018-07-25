import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MapCallout from './common/MapCallout';

class Fullmap extends Component {

  render() {
    const props = this.props.restaurants
    const { name, image_url, location } = this.props.restaurants;
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: this.props.restaurants.latitude,
          longitude: this.props.restaurants.longitude,
          latitudeDelta: 0.0992,
          longitudeDelta: 0.0421
        }}
        region={{
          latitude: this.props.restaurants.latitude,
          longitude: this.props.restaurants.longitude,
          latitudeDelta: 0.0992,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          coordinate={{
            latitude: this.props.restaurants.latitude,
            longitude: this.props.restaurants.longitude
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
    );
  }
}

const styles = {
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    background: 'rgba(0, 122, 255, 0.1)',
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  map: {
    flex: 1
  }
}

export default Fullmap;
