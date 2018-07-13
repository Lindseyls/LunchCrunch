import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.constainerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  constainerStyle: {
    borderBottomWidth: 1,
    padding: 7,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

CardSection.propTypes = {
  children: PropTypes.array.isRequired
}

export default CardSection;
