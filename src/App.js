import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import HomeScreen from './screens/Home';
import RestaurantScreen from './components/Restaurants';
import RestaurantDetailScreen from './components/RestaurantDetail';
import SearchScreen from './components/Search';
import MapScreen from './components/Map';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

Navigation.registerComponent("lunch-crunch.HomeScreen", () => HomeScreen, store, Provider);
Navigation.registerComponent("lunch-crunch.RestaurantScreen", () => RestaurantScreen, store, Provider);
Navigation.registerComponent("lunch-crunch.RestaurantDetail", () => RestaurantDetailScreen)
Navigation.registerComponent("lunch-crunch.SearchScreen", () => SearchScreen, store, Provider);
Navigation.registerComponent("lunch-crunch.MapScreen", () => MapScreen, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: "lunch-crunch.HomeScreen",
    title: "🌮 Lunch Crunch! 🍱"
  }
});






// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import Router from './Router';
//
// import reducers from './reducers';
// import Header from './components/common/Header';
// import RestaurantList from './components/RestaurantList';
//
// class App extends Component {
//   render() {
//     const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
//
//     return (
//       <Provider store={store}>
//         <View style={styles.topContainer}>
//           <Header headerText={'🌮 Lunch Crunch! 🍱'}/>
//           <RestaurantList />
//         </View>
//       </Provider>
//     );
//   }
// }
//
// const styles = {
//   topContainer: {
//     flex: 1,
//     backgroundColor: 'orange'
//   }
// }
//
// export default App;
