import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.constainerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  constainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, hieght: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

Card.propTypes = {
  children: PropTypes.object.isRequired
}

export default Card;
