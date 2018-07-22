import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Stars from './common/Stars';
import WaitTime from './common/WaitTime';
import TotalTime from './common/TotalTime';

class RestaurantDisplay extends Component {
  render() {
    const { name, price, rating, image_url, popular_times } = this.props.restaurantData;

    return (
      <TouchableWithoutFeedback onPress={this.props.onItemPressed}>
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
                <WaitTime times={popular_times} />
                <TotalTime times={popular_times} />
              </View>
              <View style={styles.starStyle}>
                <Text>{price}</Text>
                <Stars votes={rating} />
              </View>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 60,
    width: 60
  },
  starStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});

RestaurantDisplay.propTypes = {
  restaurantData: PropTypes.object.isRequired,
  onItemPressed: PropTypes.object
  // expanded: PropTypes.bool
}

// const mapStateToProps = (state, ownProps) => {
//   const expanded = state.selectedRestaurantId === ownProps.restaurantData.yelp_id
//   return { expanded }
// };
//
// export default connect(mapStateToProps, actions)(RestaurantDisplay);

export default RestaurantDisplay;
