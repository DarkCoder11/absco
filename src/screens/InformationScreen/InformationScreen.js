import React, {Component} from 'react';
import {View,Text,StyleSheet,Platform} from 'react-native';
import InformationList from '../../containers/InformationList/InformationList';


class InformationScreen extends Component {
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
        <InformationList/>
      </View>
    );
  }
}

export default InformationScreen;