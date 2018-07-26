import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("ios-clock-outline", 30),
    Icon.getImageSource("ios-list-box-outline", 30),
    Icon.getImageSource("ios-compass-outline", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs:[
        {
          screen: "lunch-crunch.TimeFilterScreen",
          label: "Filter",
          // title: "Search",
          icon: sources[0]
        },
        {
          screen: "lunch-crunch.RestaurantScreen",
          label: "Restaurants",
          title: "Restaurants",
          icon: sources[1]
        },
        {
          screen: "lunch-crunch.MapScreen",
          label: "Near Me",
          title: "Near Me",
          icon: sources[2]
        }
      ]
    })
  });
};

export default startTabs
