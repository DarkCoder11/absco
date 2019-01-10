import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const customTopBar = () => (
  <View style={styles.Container}>
    <Image source={require('../../assets/images/logo.png')} />
  </View>
)

styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 20
  }
})



export default customTopBar