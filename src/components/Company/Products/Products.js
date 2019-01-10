import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const products = (props) => {
  const productList = props.products.map((product,i) => (
    <View key={i} style={styles.productContainer}>
      <View style={styles.image}>
        <Image source={product.img} />
      </View>
      <View style={styles.productname}>
        <Text>{product.itemname}</Text>
        <Text>{product.itemsubname}</Text>
      </View>
    </View>
  ))
  return (
    <View style={styles.container}>
      {productList}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 30
  },
  image: {
    flex: 1,
    alignItems: 'center'
  },
  productContainer: {
    width: 150,
    height: 220,
    paddingTop: 29,
    paddingBottom: 23,
    marginRight: 10,
    borderRadius: 4,
    backgroundColor: "#FFFFFF"
  },
  productname: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: 16,
    color: '#2F2F34',
    marginLeft: 20
  }
})

export default products