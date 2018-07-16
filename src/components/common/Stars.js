import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import noStar from '../../img/stars/small_0.png';
import oneStar from '../../img/stars/small_1.png';
import oneHalfStar from '../../img/stars/small_1_half.png';
import twoStar from '../../img/stars/small_2.png';
import twoHalfStar from '../../img/stars/small_2_half.png';
import threeStar from '../../img/stars/small_3.png';
import threeHalfStar from '../../img/stars/small_3_half.png';
import fourStar from '../../img/stars/small_4.png';
import fourHalfStar from '../../img/stars/small_4_half.png';
import fiveStar from '../../img/stars/small_5.png';

class Stars extends Component {
  getStars = () => {
    const rating = this.props.votes;

    if (rating === 0) {
      return noStar;
    } else if (rating === 1) {
      return oneStar;
    } else if (rating === 1.5) {
      return oneHalfStar;
    } else if (rating === 2) {
      return twoStar;
    } else if (rating === 2.5) {
      return twoHalfStar;
    } else if (rating === 3) {
      return threeStar;
    } else if (rating === 3.5) {
      return threeHalfStar;
    } else if (rating === 4) {
      return fourStar;
    } else if (rating === 4.5) {
      return fourHalfStar;
    } else if (rating === 5) {
      return fiveStar;
    }
  }

  render () {
    return (
      <View>
        <Image source={this.getStars()} />
      </View>
    );
  }
}

Stars.propTypes = {
  votes: PropTypes.number.isRequired
}

export default Stars;
