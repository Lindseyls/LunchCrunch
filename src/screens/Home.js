import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Button from 'react-native-button';

import startMainTabs from './startMainTabs';
import logo from './../img/clock.png';
import background from './../img/background.png';

class HomeScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render () {
    return (
      <View>
        <View style={styles.logoStyle}>
          <Image
            source={ logo }
          />
        </View>
        <View>
          <Button
            style={styles.buttonStyle}
            onPress={this.loginHandler}
          >Find your Lunch in a Crunch!</Button>
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
  logoStyle: {
    marginTop: 50,
    marginLeft: 20,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  backgroundStyle: {
    height: 350,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonStyle: {
    color: '#414B6B',
  }
}

export default HomeScreen;
