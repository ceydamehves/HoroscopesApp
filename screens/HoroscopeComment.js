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
export default class HoroscopeComment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: 'loading...'
    }
    fetch('https://dailyhoroscope.haliliceylan.com/daily/'+this.props.navigation.getParam('horoscope','aries'))
    .then((response) => (response.json()))
    .then((response) => {
      this.setState({text:response.text})
      })
  }
  render () {
    return (
      <View style={{flex:1}}>
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
            {this.state.text}
            </Text>
          </View>
        
          <View style={styles.buttonsContainer}>
           <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button} onPress={() => {
                this.props.navigation.navigate ('HoroscopePages',{
                  photo: this.props.navigation.getParam ('photo'),
                  timeInterval:"monthly",
                  horoscope: this.props.navigation.getParam('horoscope')
                })}}>
           
             <Text style={styles.btntxt}>
                AYLIK YORUM
             </Text>
           </TouchableOpacity>
             
           </View>

           <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button} onPress={() => {
                this.props.navigation.navigate ('HoroscopePages',{
                  photo: this.props.navigation.getParam ('photo'),
                  timeInterval:"weekly",
                  horoscope: this.props.navigation.getParam('horoscope')
                   })}}>
              <Text style={styles.btntxt}>
                  HAFTALIK YORUM
              </Text>
           </TouchableOpacity>

           </View>
           <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button} onPress={() => {
                this.props.navigation.navigate ('HoroscopePages',{
                  photo: this.props.navigation.getParam ('photo'),
                  timeInterval:"yearly",
                  horoscope: this.props.navigation.getParam('horoscope')
                   })}}>
           <Text style={styles.btntxt}> YILLIK YORUM</Text>
           </TouchableOpacity>

           </View>

          </View>

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
  btntxt:{
    fontWeight:'bold',
    fontSize: 10,
    ...Platform.select({
      ios: {
        fontFamily: 'Arial'
      },
      android: {
        fontFamily: 'monospace'
  },
    }),

  }
});
