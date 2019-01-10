import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderTitle from '../../UI/HeaderTitle/headerTitle';
import Information from '../../components/Information/Information';

class CInformationList extends Component {
  state = {
    information: [
      {
        img: require('../../assets/images/review.png'),
        text: 'AUS: 1800 029 701'
      },
      {
        img: require('../../assets/images/visit.png'),
        text: 'NZ: 0800 466 444'
      },
      {
        img: require('../../assets/images/forms.png'),
        text: 'Email'
      },
      {
        img: require('../../assets/images/checkmark.png'),
        text: '24/7 Chat'
      },
      {
        img: require('../../assets/images/faq.png'),
        text: '24/7 Chat'
      },
      {
        img: require('../../assets/images/youtube.png'),
        text: '24/7 Chat'
      }
    ]
  }
  render() {
    const informationList = this.state.information.map((info,index) => (
      <Information key={index} img={info.img} text={info.text}/>
    ))
    return (
      <View style={styles.Container}>
        <HeaderTitle titleText="Information" titleCount="Learn more about us" />
        {informationList}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    backgroundColor: '#F2F2F2',
    paddingLeft: 20,
    paddingBottom: 4,
  }
})

export default CInformationList