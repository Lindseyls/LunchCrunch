import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import MapView from 'react-native-maps';

import FullMapCallout from './FullMapCallout';

class MapRestList extends Component {

  render() {
    const { name, image_url, location, latitude, longitude, popular_times } = this.props.restaurant;

    return (
      <TouchableWithoutFeedback>
        <MapView.Marker
          coordinate={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
          }}
        >
          <MapView.Callout>
            <FullMapCallout
            name={name}
            image={image_url}
            location={location}
            popular_times={popular_times}
            />
          </MapView.Callout>
        </MapView.Marker>
      </TouchableWithoutFeedback>
    );
  }
}

MapRestList.propTypes = {
  restaurant: PropTypes.object
}

export default MapRestList;
