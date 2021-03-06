import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
import Button from 'react-native-button'
import MapView from 'react-native-maps';
import { fetchRestaurantAPI } from '../actions';
import { connect } from 'react-redux';

import MapRestList from './MapRestList';

class Map extends Component {
  componentDidMount() {
    this.props.fetchRestaurantAPI()
  }

  componentWillUnmount() {
    this.props.fetchRestaurantAPI()
  }

  state = {
    focusedLocation: {
      latitude: 47.607617,
      longitude: -122.3347883,
      latitudeDelta: 0.0089,
      longitudeDelta:
        Dimensions.get("window").width /
        Dimensions.get("window").height *
        0.0089
    },
    locationChosen: false
  };

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });
  };

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        }
      };
      this.pickLocationHandler(coordsEvent);
    },
    err => {
      console.log(err)
      alert("Fetching the position failed, please pick one manually!");
    })
  }

  renderMarkers() {
		return this.props.restaurants.map((place, i) => (
			<MapRestList  key={i} restaurant={place}/>
		));
	}

  render () {
    let marker = null;

    if (this.state.locationChosen) {
      marker =
      <MapView.Marker coordinate={this.state.focusedLocation}>
        <View style={styles.radius}>
          <View style={styles.marker}/>
        </View>
      </MapView.Marker>;
    }

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          ref={ref => this.map = ref}
        >
          {marker}
          {this.renderMarkers()}
        </MapView>
        <View style={styles.button}>
          <Button
            style={styles.buttonStyle}
            onPress={this.getLocationHandler}
          >
            Locate Me
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#FACDC2'
  },
  map: {
    width: "100%",
    height: 450
  },
  button: {
    margin: 8
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
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
  buttonStyle: {
    padding: 10,
    paddingRight: 40,
    paddingLeft: 40,
    marginTop: 21,
    height: 40,
    color: 'white',
    overflow:'hidden',
    borderColor: '#414B6B',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#414B6B',
  }
});

Map.propTypes = {
  fetchRestaurantAPI: PropTypes.func,
  restaurants: PropTypes.array
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps, { fetchRestaurantAPI })(Map);

// export default Map;
