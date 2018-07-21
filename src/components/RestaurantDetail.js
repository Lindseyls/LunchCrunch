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

class RestaurantDetail extends Component {
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
  //
  render() {
    const { name, rating, review_count, image_url, popular_times } = this.props.restaurantData;

    return (
    <TouchableOpacity
      onItemPressed={this.props.onRestaurantSelected}
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
  reviewCountStyle: {
    position: 'relative'
  },
  expandContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ddd'
  }
});

RestaurantDetail.propTypes = {
  restaurantData: PropTypes.object.isRequired,
  expanded: PropTypes.bool
}

// const mapStateToProps = (state, ownProps) => {
//   const expanded = state.selectedRestaurantId === ownProps.restaurantData.yelp_id
//   return { expanded }
// };

// export default connect(mapStateToProps, actions)(RestaurantDetail);

export default RestaurantDetail;
