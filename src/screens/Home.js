import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';

import startMainTabs from './startMainTabs';
import logo from './../img/clock.png';
import background from './../img/background.png';

class HomeScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoStyle}>
          <Image
            source={ logo }
          />
        </View>
        <View>
          <Button title="Let's Get Started!" onPress={this.loginHandler} />
        </View>
        <View>
        <Image
          style={styles.backgroundStyle}
          source={ background }
        />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'FBC8BE',
    // flex:1
  },
  logoStyle: {
    marginTop: 100,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  backgroundStyle: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }
}

export default HomeScreen;
