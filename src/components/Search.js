import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Search extends Component {
  state = {
    restaurantName: ''
  };

  placeNameChangedHandler = (value) => {
    this.setState({
      restaurantName: value
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: 300, borderColor: "black", borderWidth: 1}}
          value = {this.state.restaurantName}
          onChangeText={this.placeNameChangedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;
