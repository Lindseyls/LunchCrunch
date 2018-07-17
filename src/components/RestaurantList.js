import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurantAPI } from '../actions';
import { View, ScrollView, FlatList } from 'react-native';

import RestaurantDetail from './RestaurantDetail';

class RestaurantList extends Component {
  // state = { restaurantList: [] };

  componentDidMount() {
    console.log('second')
    this.props.fetchRestaurantAPI()
  }

  // createState = () => {
  //   this.setState({ restaurantList: this.props.restaurants })
  // }

  render () {
    console.log(this.state);
    console.log('fourth')

    let restaurants = this.props.restaurants
    console.log(restaurants);
    return (
      <ScrollView>
        <RestaurantDetail restaurantData={restaurants} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  console.log('third')
  return { restaurants: state.restaurants.data }
};

export default connect(mapStateToProps, {fetchRestaurantAPI})(RestaurantList);





// <FlatList
//   data={restaurants}
//   keyExtractor={restaurants => restaurants.yelp_id}
//   renderItem={({restaurant}) =>
//     <View>
//       <RestaurantDetail restaurantData={restaurant} />
//     </View>
//   }
// />
// import React, { Component } from 'react';
// import axios from 'axios';
// import { View, FlatList } from 'react-native';
//
// import RestaurantDetail from './RestaurantDetail';
//
// const YELP_URL = 'http://localhost:3000/restaurants'
//
// class RestaurantList extends Component {
//   state = { restaurants: [] };
//
//   componentDidMount() {
//     axios.get(YELP_URL)
//       .then(response => this.setState({restaurants: response.data}));
//       // .then((response) => {
//       //     this.setState({ restaurants: response.data })
//       // });
//   }
//
//   render () {
//     return (
//       <FlatList
//         data={this.state.restaurants}
//         keyExtractor={restaurant => restaurant.yelp_id}
//         renderItem={({item}) =>
//           <View>
//             <RestaurantDetail restaurantData={item} />
//           </View>
//         }
//       />
//     );
//   }
// }
//
// export default RestaurantList;
