import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import RestaurantList from './src/components/RestaurantList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'🌯 Lunch Crunch! 🍱'}/>
      <RestaurantList />
    </View>
  );
};

export default App;
