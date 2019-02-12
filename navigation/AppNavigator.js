import {createStackNavigator, createAppContainer} from 'react-navigation';
import Horoscopes from '../screens/Horoscopes.js';
import HoroscopeComment from '../screens/HoroscopeComment.js';

const AppNavigator = createStackNavigator (
  {
    Horoscopes: {
      screen: Horoscopes,
    },
    HoroscopeComment: {
      screen: HoroscopeComment,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer (AppNavigator);
