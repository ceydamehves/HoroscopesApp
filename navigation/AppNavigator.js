import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from '../screens/MainScreen.js';
import Horoscopes from '../screens/Horoscopes.js';
import HoroscopeComment from '../screens/HoroscopeComment.js';
import HoroscopePages from '../screens/HoroscopePages.js';
import HoroscopeFeatures from '../screens/HoroscopeFeatures.js';


const AppNavigator = createStackNavigator (
  {
    MainScreen: {
      screen: MainScreen,
    },
    Horoscopes: {
      screen: Horoscopes,
    },
    HoroscopeComment: {
      screen: HoroscopeComment,
    },
    HoroscopePages:{
      screen: HoroscopePages,
    },
    HoroscopeFeatures:{
      screen: HoroscopeFeatures,
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer (AppNavigator);
