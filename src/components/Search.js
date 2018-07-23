import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

import SearchBar from './SearchBar';

class Search extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SearchBar restaurantCallback={this.props.itemSelectedCallback} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FACDC2',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
}

Search.propTypes = {
  itemSelectedCallback: PropTypes.object
}

export default Search;
