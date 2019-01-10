import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import TripAndTricks from '../../components/TipsAndTricks/TipAndTricks';
import HeaderTitle from '../../UI/HeaderTitle/headerTitle';

class TripAndTricksList extends Component {
  render() {
    const videos = [
      {
        image: require('../../assets/images/video.png'),
        text: "Pre punched holes"
      },
      {
        image: require('../../assets/images/video.png'),
        text: "Portal frame assembl"
      },
      {
        image: require('../../assets/images/video.png'),
        text: "Pre punched holes"
      },
      {
        image: require('../../assets/images/video.png'),
        text: "Portal frame assembl"
      },
      {
        image: require('../../assets/images/video.png'),
        text: "Pre punched holes"
      },
    ];
    
    const videoList = videos.map((video, i) => (
      <TripAndTricks imageUri={video.image} videoTitle={video.text} key={i} styleChange={this.props.testID === "absco.TipAndTricksList" || this.props.rightStyle } />
    ))
    return (
      <View style={styles.TripAndTricksListWrraper}>
        <ScrollView style={this.props.testID || this.props.rightStyle ? {paddingLeft: 20, paddingRight: 10, paddingTop: 30} : null} horizontal={this.props.testID !== "absco.TipAndTricksList" && !this.props.rightStyle}>
          {this.props.testID  ? <HeaderTitle titleText="Tips & Tricks" titleCount="29 videos" /> : null}
          {videoList}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  TripAndTricksListWrraper: {
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#F2F2F2'
  }
})

export default TripAndTricksList