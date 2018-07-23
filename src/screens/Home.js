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
      <View>
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
  }
}

export default HomeScreen;
