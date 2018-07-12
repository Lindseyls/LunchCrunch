import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';

const App = () => {
  return (
    <View>
      <Header headerText={'Lunch Crunch! My first official App!'}/>
    </View>
  );
};

export default App;
