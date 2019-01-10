import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const headerTitle = (props) => {
  return(
    <View style={styles.Container}>
    <View>
      <Text style={styles.TitleText}>{props.titleText}</Text>
      <Text style={styles.TitleCount}>{props.titleCount}</Text>
    </View>
    <View style={styles.SearchWrraper}>
      <Image source={require('../../assets/images/search.png')} />
    </View>
  </View>
  )
 
}

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingTop: 10
  },
  TitleText: {
    fontSize: 28,
    fontFamily: "AvenirLTStd-Heavy",
    color: "#13151E"
  },
  TitleCount: {
    fontFamily: "AvenirLTStd-Heavy",
    fontSize: 17,
    color: "#ABADBA",
    marginTop: 5,
    marginBottom: 22
  },
  SearchWrraper: {
    paddingRight: 20
  },
})

export default headerTitle