import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const guides = props => (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.image}><Image source={props.img} /></View>
      <View style={styles.text}><Text>{props.txt}</Text></View>
    </View>
    <View style={styles.icon}>
      <Icon name="ios-arrow-forward" size={20} color="#ABADBA" />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingLeft:20,
    paddingRight: 20,
    paddingTop: 23,
    paddingBottom: 21,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'center',
    marginLeft: 20
  },
  image: {
    alignSelf: 'center'
  },
  icon: {
    alignSelf: 'center'
  }
})

export default guides