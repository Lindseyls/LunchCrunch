import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';
import Button from 'react-native-button'

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
          clearButtonMode="always"
          style={styles.textInput}
          placeholder="Find your lunch in a crunch!"
          value = {this.state.restaurantName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => this.searchHandler()}
        >
          Search
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    height: "100%",
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: '50%',
    borderColor: '#414B6B',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginRight: 3
  },
  buttonStyle: {
    padding: 5,
    color: 'white',
    overflow:'hidden',
    borderColor: '#414B6B',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#414B6B',
  }
});

SearchBar.propTypes = {
  restaurantCallback: PropTypes.func
}

export default SearchBar;
