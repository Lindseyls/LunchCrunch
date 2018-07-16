import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurantAPI } from '../actions';
import { View, Text, FlatList } from 'react-native';

// import RestaurantDetail from './RestaurantDetail';

class RestaurantList extends Component {
  // state = { restaurants: [] };

  componentDidMount() {
    console.log('componentDidMount')
    this.props.fetchRestaurantAPI()
  }
  // <FlatList
  //   data={this.state.restaurants}
  //   keyExtractor={restaurant => restaurant.yelp_id}
  //   renderItem={({item}) =>
  //     <View>
  //       <RestaurantDetail restaurantData={item} />
  //     </View>
  //   }
  // />

  render () {
    console.log(this.props)
    return (<Text>Hello</Text>);
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { restaurants: state.restaurants }
  // console.log(state)
};



export default connect(mapStateToProps, {fetchRestaurantAPI})(RestaurantList);






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
