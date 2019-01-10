import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    height: 300
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width: 20,
    // borderWidth:1,
    // borderColor: '#ABADBA',
    height: 2,
    backgroundColor: '#ABADBA'
  },
  activeDot: {
    width: 20,
    // borderWidth:2,
    // borderColor: '#203154',
    height: 2,
    backgroundColor: '#203154'
  }
})

export default class Swipe extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} loop={false} bounces={true} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
        <View style={styles.slide}>
          <Image source={this.props.img}/>
        </View>
        <View style={styles.slide}>
        <Image
          source={require('../../assets/images/draving.png')}
        />
        </View>
      </Swiper>
    );
  }
}