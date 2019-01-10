import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import NavigationTitle from '../../UI/NavigationTitle/navigationTitle';
import Products from './Products/Products';

class Company extends Component {
  onOpenFullShopItemsHandler = (name,shopItem) => {
    this.props.navigator.push({
      screen: "absco.ShopItems",
      titleImage: require('../../assets/images/logo.png'),
      passProps: { name, shopItem },
    });
  }

  render() {
    
    const itemList = this.props.shopItems.map((shopItem, i) => {
      return (
        <View key={i}>
          <View>
            <NavigationTitle
              titleText={shopItem.name}
              titleCount={`${shopItem.items.length} products`}
              viewAll={shopItem.items.length > 2}
              onPageChangeHandler={() => this.onOpenFullShopItemsHandler(shopItem.name, shopItem.items)}
            />
          </View>
          <View>
            <ScrollView horizontal={shopItem.items.length > 2}>
              <Products products={shopItem.items} />
            </ScrollView>
          </View>
        </View>
      )
    })
    return (
      <View>
        {itemList}
      </View>
    )
  }
}

export default Company