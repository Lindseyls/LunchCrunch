import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RestaurantList from './components/RestaurantList';
import Search from './components/Search';

const RouterComponent = () => {

  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene
            key="restaurantList"
            component={RestaurantList}
            title="🌮 Lunch Crunch! 🍱"
            initial
          />
        </Scene>
        <Scene
          key="search"
          component={Search}
          title="Search"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
