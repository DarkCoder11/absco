import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Details from '../../components/Details/Details';

const detailList = () => {
  const data = [
    { 'Size': '3.74mW x 2.26mD x 2.10mH' },
    { 'SKU': 'J37232tk' },
    { 'Roof type': 'Gable' },
    { 'Door/s': 'Double' },
    { 'Style': 'Premier' },
    { 'Wind rating': 'N2 (147km/h)' }
  ];

  const datalist = data.map(detail => {
    for (let key in detail) {
      return (
        <Details key={key} name={key} value={detail[key]} />
      )
    }
  })

  return (
    <View style={styles.container}>
      {datalist}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 31,
    paddingBottom: 34,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#E8E9EE'
  }
})

export default detailList