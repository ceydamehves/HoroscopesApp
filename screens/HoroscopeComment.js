import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';

export default class HoroscopeComment extends React.Component {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut metus non risus pulvinar viverra eu ac justo. Sed vitae ligula lacus. Nulla a porta magna. Vestibulum ultricies efficitur pharetra. Morbi quis condimentum tortor. Proin eros eros, sodales ac quam sit amet, eleifend malesuada nisi. Etiam tortor libero, iaculis vel gravida ut, bibendum eget risus. Nunc at facilisis mi. Nulla sem enim, porttitor at leo at, varius placerat dolor. Nam vel vestibulum sapien, vitae ornare libero. Cras consectetur posuere enim, ut elementum est tincidunt gravida. Phasellus pharetra metus in auctor scelerisque. Aliquam erat volutpat. Ut scelerisque mauris nisl, sed gravida orci vulputate eu. Donec est nisi, eleifend nec bibendum et, luctus eget arcu. Proin finibus rhoncus dui.
            </Text>
          </View>
        
          <View style={styles.buttonsContainer}>
           <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button}>
             <Text style={{fontWeight:'bold'}}>
                AYLIK YORUM
             </Text>
           </TouchableOpacity>
             
           </View>

           <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button}>
              <Text style={{fontWeight:'bold'}}>
                  HAFTALIK YORUM
              </Text>
           </TouchableOpacity>

           </View>
           <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button}>
           <Text style={{fontWeight:'bold'}}>
           <Text style = {styles.textShadow}>
           YILLIK YORUM
              </Text>
                
              </Text>
           </TouchableOpacity>

           </View>

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
    padding:15,
    backgroundColor:'rgba(171, 184, 206, 0.3)',
    borderRadius:15,
    
  },
  buttonimg:{
    width:60,
    height:60,

  }

});
