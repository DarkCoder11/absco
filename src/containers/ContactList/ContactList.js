import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderTitle from '../../UI/HeaderTitle/headerTitle';
import Contacts from '../../components/Contacts/Contacts';

class ContactList extends Component {
  state = {
    contacts: [
      {
        img: require('../../assets/images/phone_icon.png'),
        text: 'AUS: 1800 029 701'
      },
      {
        img: require('../../assets/images/phone_icon.png'),
        text: 'NZ: 0800 466 444'
      },
      {
        img: require('../../assets/images/email_icon.png'),
        text: 'Email'
      },
      {
        img: require('../../assets/images/chat_icon.png'),
        text: '24/7 Chat'
      }
    ]
  }
  render() {
    const contactList = this.state.contacts.map((contact,index) => (
      <Contacts key={index} img={contact.img} text={contact.text}/>
    ))
    return (
      <View style={styles.Container}>
        <HeaderTitle titleText="Contacts" titleCount="Available 7 days 8am - 5pm AEST" />
        {contactList}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    backgroundColor: '#F2F2F2',
    paddingLeft: 20,
    paddingBottom: 115
  }
})

export default ContactList