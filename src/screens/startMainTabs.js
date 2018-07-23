import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("ios-search", 30),
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-navigate-outline", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs:[
        {
          screen: "lunch-crunch.SearchScreen",
          label: "Search",
          title: "Search",
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
