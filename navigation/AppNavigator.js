import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from '../screens/MainScreen.js';
import Horoscopes from '../screens/Horoscopes.js';
import HoroscopeComment from '../screens/HoroscopeComment.js';
import HoroscopePages from '../screens/HoroscopePages.js';
import HoroscopeFeatures from '../screens/HoroscopeFeatures.js';
import HoroscopeFeatures2 from '../screens/HoroscopeFeatures2.js';
import StylesofHoroscopes from '../screens/StylesofHoroscopes.js';
import StylesofHoroscopes2 from '../screens/StylesofHoroscopes2.js';
import HoroscopeHarmony from '../screens/HoroscopeHarmony.js';
import HoroscopeHarmony2 from '../screens/HoroscopeHarmony2.js';


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
    HoroscopeFeatures2:{
      screen: HoroscopeFeatures2,
    },
    StylesofHoroscopes:{
      screen: StylesofHoroscopes,
    },
    StylesofHoroscopes2:{
      screen: StylesofHoroscopes2,
    },
    HoroscopeHarmony:{
      screen: HoroscopeHarmony,
    },
    HoroscopeHarmony2:{
      screen: HoroscopeHarmony2,
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
