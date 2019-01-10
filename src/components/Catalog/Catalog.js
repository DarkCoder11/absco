import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class Catalog extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.props.openShopsPage}>
          <View>
            <Image source={this.props.img} />
            <View style={styles.NameTextContainer}>
              <Text style={styles.NameText}>{this.props.name}</Text>
            </View>
            <View style={styles.ShedsTextContainer}>
              <Text>{`${this.props.sheds} sheds` }</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 248,
    paddingTop: 29,
    marginRight: 10,
    borderRadius: 4,
    backgroundColor: "#FFFFFF"
  },
  NameTextContainer: {
    paddingTop: 32,
    paddingLeft: 20
  },
  NameText: {
    fontFamily: "AvenirLTStd-Black",
    fontSize: 16,
    color: "#2F2F34"
  },
  ShedsTextContainer: {
    paddingLeft: 20,
    marginTop: 12
  },
  ShedsText: {
    fontSize: 14,
    fontFamily: "AvenirLTStd-Black",
    color: "#ABADBA"
  }

})

export default Catalog