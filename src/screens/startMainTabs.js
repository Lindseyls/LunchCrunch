import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs:[
        {
          screen: "lunch-crunch.RestaurantListScreen",
          label: "List",
          title: "List",
          icon: sources[0]
        },
        {
          screen: "lunch-crunch.SearchScreen",
          label: "Search",
          title: "Search",
          icon: sources[1]
        }
      ]
    })
  });
};

export default startTabs
