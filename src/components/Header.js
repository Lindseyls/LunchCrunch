import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const Header = (props) => {

  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

Header.propTypes = {
  headerText: PropTypes.string
}

export default Header;
