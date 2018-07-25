import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MapCallout from './common/MapCallout';

class MapRestList extends Component {

  render() {
    const { name, image_url, location, latitude, longitude, popular_times } = this.props.restaurant;

    return (
      <TouchableWithoutFeedback>
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
      </TouchableWithoutFeedback>
    );
  }
}

MapRestList.propTypes = {
  restaurant: PropTypes.object
}

export default MapRestList;
