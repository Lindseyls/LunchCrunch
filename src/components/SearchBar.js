import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class SearchBar extends Component {
  state = {
    restaurantName: ''
  };

  placeNameChangedHandler = (value) => {
    this.setState({
      restaurantName: value
    });
  };

  searchHandler = () => {
    this.props.restaurantCallback(this.state.restaurantName)
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
          onPress={this.searchHandler()}
          title="Search"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    height: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  textInput: {
    width: '80%',
    height: '10%',
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

SearchBar.propTypes = {
  restaurantCallback: PropTypes.func.isRequired
}

export default SearchBar;
