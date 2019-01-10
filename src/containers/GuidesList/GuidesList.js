import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Guides from '../../components/Guides/Guides';

const guidesList = () => {
  const data = [
    {
      img: require('../../assets/images/manual.png'),
      txt: 'Watch manual'
    },
    {
      img: require('../../assets/images/checkmark.png'),
      txt: 'Warranty certificate'
    },
  ]

  const content = data.map(item => (
    <Guides key={item.txt} img={item.img} txt={item.txt} />
  ))

  return (
    <View style={styles.container}>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E9EE',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default guidesList