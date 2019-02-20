import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import {
  AdMobInterstitial
} from 'react-native-admob';

export default class Horoscopes extends React.Component {
  componentDidMount(){
    // Display an interstitial
    AdMobInterstitial.setAdUnitID('ca-app-pub-8119872254889935/2553983096');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
  }
  render () {
    return (
      <ImageBackground
        style={styles.bgContainer}
        source={require ('../assets/img/bg.jpg')}
      >
        <View style={styles.mainContainer}>
          <View style={[styles.rowContainer, styles.rowContainerOdd]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/aries.png'),
                  horoscope: 'aries',
                });
              }}
              
            >
            
              <Image
                source={require ('../assets/img/aries.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                KOÇ
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/taurus.png'),
                  horoscope: 'taurus',
                });
              }}
            >
            

              <Image
                source={require ('../assets/img/taurus.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                BOĞA
            </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerEven]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/gemini.png'),
                  horoscope: 'gemini',
                });
              }}
            >
            
              <Image
                source={require ('../assets/img/gemini.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                İKİZLER
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/cancer.png'),
                  horoscope: 'cancer',
                });
              }}
            >
            

              <Image
                source={require ('../assets/img/cancer.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                YENGEÇ
            </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerOdd]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/aquarius.png'),
                  horoscope: 'aquarius',
                });
              }}
            >
            
              <Image
                source={require ('../assets/img/aquarius.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                KOVA
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/leo.png'),
                  horoscope: 'leo',
                });
              }}
            >
            

              <Image
                source={require ('../assets/img/leo.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                ASLAN
            </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerEven]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/virgo.png'),
                  horoscope: 'virgo',
                });
              }}
            >
            
              <Image
                source={require ('../assets/img/virgo.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                BAŞAK
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/libra.png'),
                  horoscope: 'libra',
                });
              }}
            >
            

              <Image
                source={require ('../assets/img/libra.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                TERAZİ
            </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerOdd]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/scorpio.png'),
                  horoscope: 'scorpio',
                });
              }}
            >
            
              <Image
                source={require ('../assets/img/scorpio.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                AKREP
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/sagittarius.png'),
                  horoscope: 'sagittarius',
                });
              }}
            >
              <Image
                source={require ('../assets/img/sagittarius.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                YAY
            </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerEven]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/capricorn.png'),
                  horoscope: 'capricorn',
                });
              }}
            >
            
              <Image
                source={require ('../assets/img/capricorn.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                OĞLAK
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/pisces.png'),
                  horoscope: 'pisces',
                });
              }}
            >
              <Image
                source={require ('../assets/img/pisces.png')}
                style={styles.img}
              />
              <Text style={styles.buttonText}>
                BALIK
            </Text>
            </TouchableOpacity>
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
    paddingVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rowContainerEven: {
    marginHorizontal: -30,
  },
  rowContainerOdd: {
    marginHorizontal: 40,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(171, 184, 206,0.3)',
    borderRadius: 45,
    padding: 10,
  },
  img: {
    width: 70,
    height: 70,
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:10,
    alignSelf:'center',
    
    


  }

});
