import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const details = props => (
  <View style={styles.container}>
    <Text style={styles.name}>{props.name}</Text>
    <Text style={styles.value}>{props.value}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25
  },
  name: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: 14,
    color: '#ABADBA'
  },
  value: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: 16,
    color: '#2F2F34'
  }
})
export default details