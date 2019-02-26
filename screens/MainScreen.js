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



export default class MainScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          text: 'Welcome'
        }
    }
  render () {
    return (
        <ImageBackground
        style={styles.container}
        source={require ('../assets/img/bg.jpg')} >
           
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                this.props.navigation.navigate ('Horoscopes')               
            }}>
            <Text style={styles.btntxt}>
                GÜNLÜK YORUM
            </Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                this.props.navigation.navigate ('HoroscopeFeatures')               
            }}>
            <Text style={styles.btntxt}>
                BURÇ ÖZELLİKLERİ
            </Text>
            
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                this.props.navigation.navigate ('StylesofHoroscopes')               
            }}>
            <Text style={styles.btntxt}>
                BURÇLARIN TARZI
            </Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                this.props.navigation.navigate ('HoroscopeHarmony')               
            }}>
            <Text style={styles.btntxt}>
                BURÇ UYUMU
            </Text>
            
          </TouchableOpacity>
          
        </View>
        </ImageBackground>
            
          
                
    );
    
}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    buttonContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      
      
    },
    rowContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
  },
    button: {
      backgroundColor: 'rgba(171, 184, 206,0.3)',
      borderRadius: 70,
      padding: 25,
      marginBottom: 10,
    },
    btntxt:{
      fontWeight:'bold',
      fontSize: 15,
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
      
          
    