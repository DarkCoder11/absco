import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import CatalogList from '../CatalogList/CatalogList';
import TipAndTricksList from '../TipAndTricksList/TipAndTricksList';
import HeaderTitle from '../../UI/HeaderTitle/headerTitle';
import NavigationTitle from '../../UI/NavigationTitle/navigationTitle';

class MainPage extends Component {

  onOpenFullVideosHandler = () => {
    this.props.navigator.push({
      screen: "absco.TipAndTricksList",
      titleImage: require('../../assets/images/logo.png'),
    });
  }
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.CatalogListContainer}>
          <HeaderTitle titleText="Catalog" titleCount="5 Categories" />
          <View style={styles.CatalogList}>
            <CatalogList navigator={this.props.navigator} />
          </View>
        </View>
        <View style={styles.TipAndTrickContainer}>
          <NavigationTitle titleText="Trip and Ticks" viewAll={true} titleCount={null} onPageChangeHandler={this.onOpenFullVideosHandler} />
          <View style={styles.TipAndTrick}>
            <TipAndTricksList navigator={this.props.navigator} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F2F2F2",
    paddingLeft: 20
  },
  CatalogListContainer: {
    flex: 3,
    paddingBottom: 30
  },
  CatalogList: {
    flex: 5,
    marginTop: 22
  },
  TipAndTrickContainer: {
    flex: 2
  },
  TipAndTrick: {
    flex: 2
  }
})

export default MainPage


