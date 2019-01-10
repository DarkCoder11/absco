import React, {Component} from 'react';
import {View,StyleSheet, Platform} from 'react-native';
import MainPage from '../../containers/MainPage/MainPage';


class MainPageScreen extends Component {
  render() {
    return(
      <View>
        <MainPage navigator={this.props.navigator}/>
      </View>
    );
  }
}

export default MainPageScreen;