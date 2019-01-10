import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


class Contacts extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Contact}>
          <Image source={this.props.img} />
          <Text>{this.props.text}</Text>
          <Text>></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingRight: 20
  },
  Contact: {
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: '#DADCE5',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
  }
})

export default Contacts