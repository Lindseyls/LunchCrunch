import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Header from './components/common/Header';
import RestaurantList from './components/RestaurantList';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={styles.topContainer}>
          <Header headerText={'🌮 Lunch Crunch! 🍱'}/>
          <RestaurantList />
        </View>
      </Provider>
    );
  }
}

const styles = {
  topContainer: {
    flex: 1
  }
}

export default App;
