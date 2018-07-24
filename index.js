import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
// import Router from './src/Router';
import reducers from './src/reducers';

class RNRedux extends Component {
  render() {
    const store = createStore(reducers, {}, composeWithDevTools(
      applyMiddleware(ReduxThunk)
    ));

    return (
      <Provider store={store}>
        <View style={styles.topContainer}>
          <App />
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

AppRegistry.registerComponent('lunchcrunch', () => RNRedux);










// import { AppRegistry } from 'react-native';
// import App from './src/App';
//
// AppRegistry.registerComponent('lunchcrunch', () => App);
