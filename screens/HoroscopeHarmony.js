import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
  Platform,
} from 'react-native';



export default class HoroscopeFeatures extends React.Component {
  render () {
    return (
        <ImageBackground
        style={styles.bgContainer}
        source={require ('../assets/img/bg.jpg')}
        ></ImageBackground>



    );

  }}

  const styles = StyleSheet.create ({
    bgContainer: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingHorizontal: 30,
      paddingVertical: 10,
    }



});