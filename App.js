import React from 'react';
import {StatusBar,View} from 'react-native';
import AppContainer from './navigation/AppNavigator.js';

export default class App extends React.Component {
  render () {
    return (
    <View style={{flex:1}}>
    <StatusBar translucent={true} backgroundColor="rgba(171, 184, 206,0.05)"/>
    <AppContainer/>
    </View>
    );
  }
}
