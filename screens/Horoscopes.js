import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';

export default class Horoscopes extends React.Component {
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
                  photo: require ('../assets/img/aquarius.png'),
                });
              }}
            >
              <Image
                source={require ('../assets/img/aquarius.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/aries.png'),
                });
              }}
            >

              <Image
                source={require ('../assets/img/aries.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerEven]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/cancer.png'),
                });
              }}
            >
              <Image
                source={require ('../assets/img/cancer.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/capricorn.png'),
                });
              }}
            >

              <Image
                source={require ('../assets/img/capricorn.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerOdd]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/gemini.png'),
                });
              }}
            >
              <Image
                source={require ('../assets/img/gemini.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/leo.png'),
                });
              }}
            >

              <Image
                source={require ('../assets/img/leo.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerEven]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/libra.png'),
                });
              }}
            >
              <Image
                source={require ('../assets/img/libra.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/pisces.png'),
                });
              }}
            >

              <Image
                source={require ('../assets/img/pisces.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerOdd]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/sagittarius.png'),
                });
              }}
            >
              <Image
                source={require ('../assets/img/sagittarius.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/scorpio.png'),
                });
              }}
            >

              <Image
                source={require ('../assets/img/scorpio.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerEven]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/taurus.png'),
                });
              }}
            >
              <Image
                source={require ('../assets/img/taurus.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate ('HoroscopeComment', {
                  photo: require ('../assets/img/virgo.png'),
                });
              }}
            >

              <Image
                source={require ('../assets/img/virgo.png')}
                style={styles.img}
              />
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
    paddingVertical: 20,
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
    marginHorizontal: 30,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(171, 184, 206,0.3)',
    borderRadius: 50,
    padding: 12,
  },
  img: {
    width: 80,
    height: 80,
  },
});
