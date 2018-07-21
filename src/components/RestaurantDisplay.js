import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Stars from './common/Stars';
import WaitTime from './common/WaitTime';
import TotalTime from './common/TotalTime';

class RestaurantDisplay extends Component {
  // componentDidUpdate() {
  //   LayoutAnimation.spring();
  // }
  //
  // renderDescription() {
  //   const { restaurantData, expanded } = this.props;
  //
  //   if (expanded) {
  //     return (
  //
  //         <Text style={styles.expandContainerStyle}>
  //           Linking.openURL({restaurantData.yelp_url})
  //         </Text>
  //
  //     );
  //   }
  // }

  render() {
    const { name, rating, image_url, popular_times } = this.props.restaurantData;

    return (
      <TouchableOpacity onPress={this.props.onItemPressed}>
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
                <WaitTime times={popular_times} />
                <TotalTime times={popular_times} />
              </View>
            </CardSection>
          </Card>
        </View>
      </TouchableOpacity>
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
  // expandContainerStyle: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginLeft: 10,
  //   marginRight: 10,
  //   backgroundColor: '#ddd'
  // }
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
