import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

class TripAndTricks extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Image style={!this.props.styleChange ? styles.Video : styles.VideoFullList} source={this.props.imageUri} />
        <View style={styles.VideoTitleContainer}>
          <Text style={styles.VideoTitle}>{this.props.videoTitle}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    marginRight: 10
  },
  VideoTitleContainer: {
    marginBottom: 38
  },
  VideoTitle: {
    // fontFamily: "AvenirLTStd-Book",
    fontSize: 15,
    color: "#2F2F34",
    marginTop: 10
  },
  Video: {
    borderRadius: 4,
    width: 205,
    height: 103
  },
  VideoFullList: {
    borderRadius: 4,
    height: 195,
    width: '100%'
  }
})

export default TripAndTricks

