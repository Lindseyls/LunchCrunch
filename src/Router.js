import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RestaurantList from './components/RestaurantList';

const RouterComponent = () => {

  return (
    <Router>
      <Scene key="root" style={styles.topContainer}>
        <Scene
          key="list"
          component={RestaurantList}
          title="🌮 Lunch Crunch! 🍱"
        />
      </Scene>
    </Router>
  );
};

const styles = {
  topContainer: {
    flex: 1,
    backgroundColor: 'orange'
  }
}

export default RouterComponent;
