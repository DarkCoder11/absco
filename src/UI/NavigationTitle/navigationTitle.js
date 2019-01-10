import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const navigationTitle = (props) => (
  <View style={styles.Container}>
    <View style={styles.TipAndTrickHeader}>
      <View>
        <Text style={styles.TitleText}>{props.titleText}</Text>
        <Text style={styles.NavigationTitleCount}>{props.titleCount}</Text>
      </View>
      {props.viewAll ? <TouchableOpacity onPress={props.onPageChangeHandler} >
        <Text style={styles.ViewAllText}>View all</Text>
      </TouchableOpacity> : null}
    </View>
  </View>
)

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  TipAndTrickHeader: {
    flex: 1,
    flexDirection: "row",
    paddingRight: 20,
    justifyContent: 'space-between'
  },
  TitleText: {
    fontFamily: "AvenirLTStd-Heavy",
    fontSize: 17,
    color: "#13151E"
  },
  NavigationTitleCount: {
    fontFamily: "AvenirLTStd-Heavy",
    fontSize: 14,
    color: "#ABADBA",
    marginTop: 3,
    marginBottom: 22
  },
  ViewAllText: {
    fontFamily: "AvenirLTStd-Light",
    fontSize: 14,
    color: "#566FA7"
  }
})

export default navigationTitle