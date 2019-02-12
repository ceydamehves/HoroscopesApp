import {createStackNavigator, createAppContainer} from 'react-navigation';
import Horoscopes from '../screens/Horoscopes.js';

const AppNavigator = createStackNavigator (
  {
    Horoscopes: {
      screen: Horoscopes,
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
