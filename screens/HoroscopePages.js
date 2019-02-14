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

export default class HoroscopePages extends React.Component {
  render () {
    return (
      <ImageBackground
        style={styles.bgContainer}
        source={require ('../assets/img/bg.jpg')}
      >
        <View style={styles.mainContainer}>
          <View style={styles.photoContainer}>
            <Image
              style={styles.photo}
              source={this.props.navigation.getParam ('photo', {
                uri: 'https://via.placeholder.com/150',
              })}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Güncelleme 1.2 ile erişebileceksiniz. :)
            </Text>
          </View>
        
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create ({
  bgContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  photoContainer: {
    backgroundColor: 'rgba(171, 184, 206,0.3)',
    alignItems: 'center',
    borderRadius: 100,
    padding: 20,
  },
  photo: {
    width: 100,
    height: 100,
  },
  textContainer: {
    backgroundColor: 'rgba(171, 184, 206, 0.3)',
    alignSelf: 'stretch',
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  text: {
    textAlign: 'center',
  },
  buttonsContainer:{
    alignSelf: 'stretch',
    height: 200,
    flexDirection:'row'
  },
  buttonContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:'rgba(171, 184, 206, 0.3)',
    borderRadius:15, 
  },
  
    });
    
  
