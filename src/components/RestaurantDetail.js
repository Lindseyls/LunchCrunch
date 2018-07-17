import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Stars from './common/Stars';
import WaitTime from './common/WaitTime';

class RestaurantDetail extends Component {

  renderDescription() {
    const { restaurantData, selectedRestaurantId } = this.props;

    if (restaurantData.yelp_id === selectedRestaurantId) {
      return (
        <Text>{restaurantData.yelp_url}</Text>
      );
    }
  }
  render() {
    const { yelp_id, name, rating, review_count, image_url, popular_times } = this.props.restaurantData;

    return (

    <TouchableWithoutFeedback
      onPress={() => this.props.selectRestaurant(yelp_id)}
    >
      <View>
        <Card>
          <CardSection>
            <View style={styles.thumbnailContainerStyle}>
              <Image
                style={styles.thumbnailStyle}
                source={{ uri: image_url }}
              />
            </View>
            <View style={styles.contentStyle}>
              <Text style={styles.headerTextStyle}>{name}</Text>
              <Stars votes={rating} />
              <Text style={styles.reviewCountStyle}>{review_count} reviews</Text>
              <WaitTime times={popular_times} />
            </View>
          </CardSection>
        </Card>
        {this.renderDescription()}
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 55,
    width: 55
  },
  reviewCountStyle: {
    position: 'relative'
  }
});

RestaurantDetail.propTypes = {
  restaurantData: PropTypes.object.isRequired,
  selectRestaurant: PropTypes.func
}

const mapStateToProps = state => {
  return { selectedRestaurantId: state.selectedRestaurantId }
};

export default connect(mapStateToProps, actions)(RestaurantDetail);
