import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import HeaderTitle from '../../../../UI/HeaderTitle/headerTitle';
import Grage from '../../../Garage/Garage';

class shopItems extends Component {
  state = {
    showModal: false,
    source: null,
    name: null,
    subName: null
  }
  openModal = (source,name,subName) => {
    this.setState({
      showModal: true,
      source: source,
      name: name,
      subName: subName
    })
  }
  closeModal = () => {
    this.setState({
      showModal: false
    })

  }
  render() {
    const shopItemsList = this.props.shopItem.map((shopItem, i) => (
      <View key={i} style={styles.shopItem}>
        <TouchableWithoutFeedback onPress={() => this.openModal(shopItem.img, shopItem.itemname, shopItem.itemsubname)}>
          <View style={styles.touchable}>
            <View style={styles.imageContainer}>
              <Image source={shopItem.img} />
            </View>
            <View style={styles.textContainer}>
              <Text>{shopItem.itemname}</Text>
              <Text>{shopItem.itemsubname}</Text>
            </View>
            <Grage
              show={this.state.showModal}
              closeModal={this.closeModal}
              img={this.state.source}
              name={this.state.name}
              subName={this.state.subName} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderTitle titleText={this.props.name} titleCount={this.props.shopItem.length + ' products'} />
        </View>
        <View style={styles.shopItemContainer}>
          {shopItemsList}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E9EE'
  },
  headerContainer: {
    paddingLeft: 20,
  },
  shopItemContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingRight: 15,
    paddingLeft: 15
  },
  shopItem: {
    width: '50%',
    height: '50%'
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textContainer: {
    marginLeft: 20
  },
  touchable: {
    height: '90%',
    backgroundColor: '#FFFFFF',
    margin: 5
  }
})

export default shopItems


  // const addModal = () => {
  //   props.navigator.showModal({
  //     screen: "absco.Garage",
  //     passProps: {},
  //     navigatorStyle: {
  //       drawUnderNavBar: true,
  //       navBarTransparent: true,
  //       navBarTranslucent: true,
  //       navBarBackgroundColor: '#000000',
  //     },
  //     animationType: 'slide-up'
  //   });
  // }
