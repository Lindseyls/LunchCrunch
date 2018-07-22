import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Search extends Component {
  state = {
    restaurantName: ''
  };

  placeNameChangedHandler = (value) => {
    this.setState({
      restaurantName: value
    });
  };

  onSubmitQuery = () => {
    this.props.setRestaurantCallback(this.state.restaurantName)
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Find your lunch in a crunch'
          value = {this.state.restaurantName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => this.onSubmitQuery()}
          title="Search"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: '#FACDC2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  textInput: {
    width: '80%',
    height: '5%',
    borderColor: '#414B6B',
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  buttonStyle: {
    padding: 10,
    color: '#414B6B',
    // overflow:'hidden',
    borderColor: '#414B6B',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#414B6B'
  }
});

export default Search;
