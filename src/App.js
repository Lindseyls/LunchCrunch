import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import HomeScreen from './screens/Home';
import RestaurantScreen from './components/Restaurants';
import RestaurantDetailScreen from './components/RestaurantDetail';
import MapScreen from './components/Map';
import FilterScreen from './components/Filter';

const store = createStore(reducers, {}, composeWithDevTools(
  applyMiddleware(ReduxThunk)
));

Navigation.registerComponent("lunch-crunch.HomeScreen", () => HomeScreen, store, Provider);
Navigation.registerComponent("lunch-crunch.RestaurantScreen", () => RestaurantScreen, store, Provider);
Navigation.registerComponent("lunch-crunch.RestaurantDetail", () => RestaurantDetailScreen)
Navigation.registerComponent("lunch-crunch.MapScreen", () => MapScreen, store, Provider);
Navigation.registerComponent("lunch-crunch.FilterScreen", () => FilterScreen, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: "lunch-crunch.HomeScreen",
  }
});
