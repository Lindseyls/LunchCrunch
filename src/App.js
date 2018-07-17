import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

import reducers from './reducers';
import Header from './components/common/Header';
import RestaurantList from './components/RestaurantList';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // <Header headerText={'🌮 Lunch Crunch! 🍱'}/>

    return (
      <Provider store={store}>
        <View style={styles.topContainer}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = {
  topContainer: {
    flex: 1,
    backgroundColor: 'orange'
  }
}

export default App;
