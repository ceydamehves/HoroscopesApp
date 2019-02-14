import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';

export default class HoroscopePages extends React.Component {
  render () {
    return (
      <ImageBackground
        style={styles.bgContainer}
        source={require ('../assets/img/')}
      ></ImageBackground>