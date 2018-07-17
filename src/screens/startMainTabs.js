import { Navigation } from 'react-native-navigation';

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs:[
      {
        screen: "lunch-crunch.RestaurantListScreen",
        label: "List",
        title: "List",
        // icon: sources[0]
      },
      {
        screen: "lunch-crunch.SearchScreen",
        label: "Search",
        title: "Search",
        // icon: sources[1]
      }
    ]
  })
};

export default startTabs
