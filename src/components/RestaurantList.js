import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurantAPI } from '../actions';
import { View, FlatList } from 'react-native';

import RestaurantDetail from './RestaurantDetail';

class RestaurantList extends Component {

  componentDidMount() {
    console.log('second')
    this.props.fetchRestaurantAPI()
  }

  render () {
    console.log('fourth')
    console.log(typeof this.props.restaurants);

    let restaurants = this.props.restaurants

    if (restaurants !== null && restaurants !== undefined) {
      return ( <FlatList
        data={restaurants}
        keyExtractor={restaurants => restaurants.yelp_id}
        renderItem={(restaurant) =>
          <View>
            <RestaurantDetail restaurantData={restaurant} />
          </View>
        }
      /> );
    } else {
      return (null);
    }

  }
}

const mapStateToProps = state => {
  console.log('third')
  return { restaurants: state.restaurants.data }
};

export default connect(mapStateToProps, {fetchRestaurantAPI})(RestaurantList);





//
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
