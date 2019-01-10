import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet, ScrollView } from 'react-native';
import Catalog from '../../components/Catalog/Catalog';

class CatalogList extends Component {
  state = {
    shops: [
      {
        name: 'Absco Sheds',
        img: require('../../assets/images/fourthShop.png'),
        sheds: 124,
        id: 1,
        subcategory: [
          {
            name: 'Tidymaster',
            id: 'sub1',
            items: [
              {
                itemname: 'Tidymaster',
                itemsubname: '30302TK',
                img: require('../../assets/images/firstSubShop.png')
              },
              {
                itemname: 'Tidymaster',
                itemsubname: 'J23231TK',
                img: require('../../assets/images/secondSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J37232TK',
                img: require('../../assets/images/thirdSubSHop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J53782TK',
                img: require('../../assets/images/fourthSubSHop.png')
              }
            ]
          },
          {
            name: 'Masterstore',
            id: 'sub2',
            items: [
              {
                itemname: 'Masterstore ',
                itemsubname: '15081MK',
                img: require('../../assets/images/firstSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J23231TK',
                img: require('../../assets/images/fourthSubSHop.png')
              }
            ]
          },
          {
            name: 'Trimslider',
            id: 'sub3',
            items: [
              {
                itemname: 'Trimslider ',
                itemsubname: '30082TSK',
                img: require('../../assets/images/sixthSubSHop.png')
              }
            ]
          },
          {
            name: 'Garden pro backyard',
            id: 'sub4',
            items: [
              {
                itemname: 'Garden pro ',
                itemsubname: '30222TK',
                img: require('../../assets/images/eightSubSHop.png')
              },
              {
                itemname: 'Garden pro ',
                itemsubname: '30372TK',
                img: require('../../assets/images/seventhSubSHop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J37232TK',
                img: require('../../assets/images/thirdSubSHop.png')
              }
            ]
          },
        ]
      },
      {
        name: 'Absco Chicken Coops',
        img: require('../../assets/images/firstShop.png'),
        sheds: 43,
        id: 2,
        subcategory: [
          {
            name: 'Tidymaster',
            id: 'sub5',
            items: [
              {
                itemname: 'Tidymaster ',
                itemsubname: '30302TK',
                img: require('../../assets/images/firstSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J23231TK',
                img: require('../../assets/images/secondSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J37232TK',
                img: require('../../assets/images/thirdSubSHop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J53782TK',
                img: require('../../assets/images/fourthSubSHop.png')
              }
            ]
          },
          {
            name: 'Masterstore',
            id: 'sub6',
            items: [
              {
                itemname: 'Masterstore ',
                itemsubname: '15081MK',
                img: require('../../assets/images/firstSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J23231TK',
                img: require('../../assets/images/fourthSubSHop.png')
              }
            ]
          },
          {
            name: 'Trimslider',
            id: 'sub7',
            items: [
              {
                itemname: 'Trimslider ',
                itemsubname: '30082TSK',
                img: require('../../assets/images/sixthSubSHop.png')
              }
            ]
          },
          {
            name: 'Garden pro backyard',
            id: 'sub8',
            items: [
              {
                itemname: 'Garden pro ',
                itemsubname: '30222TK',
                img: require('../../assets/images/eightSubSHop.png')
              },
              {
                itemname: 'Garden pro ',
                itemsubname: '30372TK',
                img: require('../../assets/images/seventhSubSHop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J37232TK',
                img: require('../../assets/images/thirdSubSHop.png')
              }
            ]
          },
        ]
      },
      {
        name: 'Absco Garages',
        img: require('../../assets/images/secondShop.png'),
        sheds: 12,
        id: 3,
        subcategory: [
          {
            name: 'Tidymaster',
            id: 'sub9',
            items: [
              {
                itemname: 'Tidymaster ',
                itemsubname: '30302TK',
                img: require('../../assets/images/firstSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J23231TK',
                img: require('../../assets/images/secondSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J37232TK',
                img: require('../../assets/images/thirdSubSHop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J53782TK',
                img: require('../../assets/images/fourthSubSHop.png')
              }
            ]
          },
          {
            name: 'Masterstore',
            id: 'sub10',
            items: [
              {
                itemname: 'Masterstore ',
                itemsubname: '15081MK',
                img: require('../../assets/images/firstSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J23231TK',
                img: require('../../assets/images/fourthSubSHop.png')
              }
            ]
          },
          {
            name: 'Trimslider',
            id: 'sub11',
            items: [
              {
                itemname: 'Trimslider ',
                itemsubname: '30082TSK',
                img: require('../../assets/images/sixthSubSHop.png')
              }
            ]
          },
          {
            name: 'Garden pro backyard',
            id: 'sub12',
            items: [
              {
                itemname: 'Garden pro ',
                itemsubname: '30222TK',
                img: require('../../assets/images/eightSubSHop.png')
              },
              {
                itemname: 'Garden pro ',
                itemsubname: '30372TK',
                img: require('../../assets/images/seventhSubSHop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J37232TK',
                img: require('../../assets/images/thirdSubSHop.png')
              }
            ]
          },
        ]
      },
      {
        name: 'Garden Pro',
        img: require('../../assets/images/thirdShop.png'),
        sheds: 16,
        id: 4,
        subcategory: [
          {
            name: 'Tidymaster',
            id: 'sub13',
            items: [
              {
                itemname: 'Tidymaster ',
                itemsubname: '30302TK',
                img: require('../../assets/images/firstSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J23231TK',
                img: require('../../assets/images/secondSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J37232TK',
                img: require('../../assets/images/thirdSubSHop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J53782TK',
                img: require('../../assets/images/fourthSubSHop.png')
              }
            ]
          },
          {
            name: 'Masterstore',
            id: 'sub14',
            items: [
              {
                itemname: 'Masterstore ',
                itemsubname: '15081MK',
                img: require('../../assets/images/firstSubShop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J23231TK',
                img: require('../../assets/images/fourthSubSHop.png')
              }
            ]
          },
          {
            name: 'Trimslider',
            id: 'sub15',
            items: [
              {
                itemname: 'Trimslider ',
                itemsubname: '30082TSK',
                img: require('../../assets/images/sixthSubSHop.png')
              }
            ]
          },
          {
            name: 'Garden pro backyard',
            id: 'sub16',
            items: [
              {
                itemname: 'Garden pro ',
                itemsubname: '30222TK',
                img: require('../../assets/images/eightSubSHop.png')
              },
              {
                itemname: 'Garden pro ',
                itemsubname: '30372TK',
                img: require('../../assets/images/seventhSubSHop.png')
              },
              {
                itemname: 'Tidymaster ',
                itemsubname: 'J37232TK',
                img: require('../../assets/images/thirdSubSHop.png')
              }
            ]
          },
        ]
      }
    ]
  }


  onOpenCompanyListHandler = (id) => {
    this.props.navigator.push({
      screen: "absco.CompanyList",
      titleImage: require('../../assets/images/logo.png'),
      passProps: { shops: this.state.shops, selectedId: id },
    })
  }

  render() {
    let catalogList = this.state.shops.map(shop => (
      <Catalog key={shop.id} img={shop.img} name={shop.name} sheds={shop.sheds} openShopsPage={() => this.onOpenCompanyListHandler(shop.id)} />
    ))
    return (
      <View style={styles.container} >
        <ScrollView horizontal={true}>
          <View style={styles.CatalogListContainer}>
            {catalogList}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CatalogListContainer: {
    flexDirection: 'row'
  }
})

export default CatalogList;
