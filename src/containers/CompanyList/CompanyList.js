import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet, ScrollView } from 'react-native';
import Company from '../../components/Company/Company';
import HeaderTitle from '../../UI/HeaderTitle/headerTitle';
import NavigationTitle from '../../UI/NavigationTitle/navigationTitle';


class CompanyList extends Component {
  render() {
    const companyList = this.props.shops.map((shop,i) => {
      if (shop.id === this.props.selectedId) {
        return (
          <View key={i + 'shop'} style={styles.container}>
            <HeaderTitle titleText={shop.name} titleCount={`${shop.subcategory.length} sub-categories`} />
            <Company shopItems={shop.subcategory} navigator={this.props.navigator}/>
          </View>
        )
      }
    })

    return (
      <ScrollView>
        {companyList}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: '#F2F2F2'
  }
})

export default CompanyList