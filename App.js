import React from 'react';
import {StatusBar,View} from 'react-native';
import AppContainer from './navigation/AppNavigator.js';

export default class App extends React.Component {
  constructor(props){
    super(props)
    var PushNotification = require('react-native-push-notification');
    PushNotification.cancelAllLocalNotifications()
    notificationRepeatTime = 12 * 60 * 60 * 1000;
    PushNotification.localNotificationSchedule({  
      message: "Günlük Burç Yorumunuzu Okudunuz Mu ?", // (required)
      date: new Date(Date.now() + notificationRepeatTime),
      repeatType: 'time',
      repeatTime: notificationRepeatTime 
    });
  }
  render () {
    return (
    <View style={{flex:1}}>
    <StatusBar translucent={true} backgroundColor="rgba(171, 184, 206,0.05)"/>
    <AppContainer/>
    </View>
    );
  }
}
