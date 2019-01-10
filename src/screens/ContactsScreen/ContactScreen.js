import React, {Component} from 'react';
import {View,Text, StyleSheet,Platform} from 'react-native';
import ContactList from '../../containers/ContactList/ContactList';


class ContactScreen extends Component {
  // componentDidMount() {
  //   if(Platform.OS === 'android') {
  //     this.props.navigator.setStyle({
  //       navBarCustomView: 'absco.CustomTopBar'
  //     });
  //   }
  // }
  render() {
    return(
      <View >
        <ContactList/>
      </View>
    );
  }
}

export default ContactScreen;