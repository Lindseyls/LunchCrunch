import React, { Component } from 'react';
import { View, Button } from 'react-native';

import startMainTabs from './startMainTabs';

class HomeScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render () {
    return (
      <View>
        <Button title="Let's Get Started!" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default HomeScreen;
