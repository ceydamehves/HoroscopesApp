import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from '../screens/MainScreen.js';
import Horoscopes from '../screens/Horoscopes.js';
import HoroscopeComment from '../screens/HoroscopeComment.js';
import HoroscopePages from '../screens/HoroscopePages.js';
import HoroscopeFeatures from '../screens/HoroscopeFeatures.js';
import StylesofHoroscopes from '../screens/StylesofHoroscopes.js';
import HoroscopeHarmony from '../screens/HoroscopeHarmony.js';
import RisingSign from '../screens/RisingSign.js';


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
    },
    StylesofHoroscopes:{
      screen: StylesofHoroscopes,
    },
    HoroscopeHarmony:{
      screen: HoroscopeHarmony,
    },
    RisingSign:{
      screen: RisingSign,
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
