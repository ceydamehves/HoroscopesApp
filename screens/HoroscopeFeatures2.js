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



export default class HoroscopeFeatures2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          text: 'loading...'
        }}
  render () {
    return (
    
        <View style={{flex:1}}>
          <ImageBackground
            style={styles.bgContainer}
            source={require ('../assets/img/bg.jpg')}
           >
           <ImageBackground
            style={styles.Container}
            source={require ('../assets/img/aries.png')}
           ></ImageBackground>
           <Text style={styles.textContainer}>
                  KOÇ BURCU ÖZELLİKLERİ
           </Text>
           <Text style={styles.textContainer}>
           *Yönetici Yıldızınız: Mars 
           </Text>
           <Text style={styles.textContainer}>
           *Grubunuz: Ateş-Pozitif
           </Text>
           <Text style={styles.textContainer}>
           *Burcunuzun Cinsiyeti: Erkek
           </Text>
           <Text style={styles.textContainer}>
           *Amacınız: Başarı.
           </Text>
           <Text style={styles.textContainer}>
           *Üstün Yeteneğiniz: Canlılık ve hareket.
           </Text>
           <Text style={styles.textContainer}>
           *Özelliğiniz: Yeni girişimler,cesaret ve atılganlık.
           </Text>
           <Text style={styles.textContainer}>
           *Emeliniz: Öncülük, liderlik ve yol göstericilik.
           </Text>
           <Text style={styles.textContainer}>
           *Yenmeniz Gereken Huyunuz: Sabırsızlık..
           </Text>

           </ImageBackground>
        
        
        
            
        </View>
        


    );

  }}

  const styles = StyleSheet.create ({
    bgContainer: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'space-between',
      paddingHorizontal: 100,
      paddingVertical: 100,
    },
    textContainer: {
        backgroundColor: 'rgba(171, 184, 206, 0.1)',
        alignSelf: 'stretch',
        marginTop: 1,
        borderRadius: 40,
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    text: {
        textAlign: 'center',
        fontWeight:'bold',
    },
    Container:{
        width:150,
        height:150,
        marginTop:-40,
        alignSelf:'center'
    }


});