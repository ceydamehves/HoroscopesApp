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
import {
  AdMobBanner,
} from 'react-native-admob'


export default class HoroscopeHarmony2 extends React.Component {
    constructor(props){
        super(props)
        HoroscopeHarmony = require('../assets/horoscopeharmony.json');
        horoscope = this.props.navigation.getParam('horoscope','aries')
        this.state = {
          text: HoroscopeHarmony[horoscope]['lines']
          .map((k,v) => (<Text id={v} style={styles.text}>{k}</Text>))
        }
        
      }
  render () {
    return (
    
        <View style={{flex:1}}>
          <ImageBackground
            style={styles.bgContainer}
            source={require ('../assets/img/bg.jpg')}
           >
           <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={this.props.navigation.getParam('photo')}
            ></Image>
           </View>
           <View style={styles.textContainer}>
           {this.state.text}
           </View>
           </ImageBackground>
                <AdMobBanner
              adSize="smartBanner"
              adUnitID="ca-app-pub-8119872254889935/2745554780"
              testDevices={[AdMobBanner.simulatorId]}
              onAdFailedToLoad={error => console.error(error)}
              />
        </View>
        


    );

  }}

  const styles = StyleSheet.create ({
    bgContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    textContainer: {
        backgroundColor: 'rgba(171, 184, 206, 0.1)',
        alignSelf: 'stretch',
        marginTop: 1,
        borderRadius: 40,
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 15,
        fontFamily:'MarkPro Medium'
    },
    image:{
      width:150,
      height:150
    },
    imageContainer:{
        borderRadius: 80,
        padding: 15,
        backgroundColor: 'rgba(171, 184, 206, 0.1)',
    }


});