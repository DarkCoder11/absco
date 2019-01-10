import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Modal, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipe from '../../UI/Swipe/Swipe';
import FooterNavigation from '../../hoc/footerNavigation/footerNavigation';
import RNPickerSelect from 'react-native-picker-select';
import ColorPicker from '../../UI/ColorPicker/ColorPicker';

class Garage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Videos',
      favColor: 'red',
      items: [
        {
          label: 'Red',
          value: 'red',
          color: 'red',
          borderColor: 'red',
          borderWidth: 3
        },
        {
          label: 'Orange',
          value: 'orange',
          color: 'orange'
        },
        {
          label: 'Blue',
          value: 'blue',
          color: 'blue'
        },
      ],
    };
  }

  navigate = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <View >
        <Modal visible={this.props.show} animationType='slide' presentationStyle='overFullScreen' transparent={true}>
          <ScrollView bounces={false}>
            <View style={styles.container}>
              <View style={styles.topContent}>
                <View style={styles.closeLineContainer}>
                  <TouchableHighlight onPress={this.props.closeModal}>
                    <View style={styles.closeLine}></View>
                  </TouchableHighlight>
                </View>
                <View style={styles.useContainer}>
                  <View>
                    <Text>FAQ</Text>
                  </View>
                  <View>
                    <Icon name="md-expand" size={30} color="#ABADBA" />
                  </View>
                </View>
                <View style={styles.swipeContainer}>
                  <Swipe img={this.props.img} />
                </View>
                <View style={styles.pickerWrraper}>
                  <View>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.name}>{this.props.subName}</Text>
                  </View>
                  <View style={styles.pickerBorder}>
                    <View style={[styles.colorPicker, { backgroundColor: this.state.favColor }]}></View>
                    <RNPickerSelect
                      placeholder={{}}
                      items={this.state.items}
                      
                      // children={<Text>aaaaaaaa </Text>}
                      // textInputProps = {{
                        // color: 'purple',
                        // backgroundColor: 'yellow'
                      // }}
                      onValueChange={(value) => {
                        this.setState({
                          favColor: value,
                        });
                      }}
                      style={{ ...pickerSelectStyles }}
                      value={this.state.favColor}
                      // {...pickerProps}
                    />
                  </View>
                </View>
                <View style={styles.arContainer}>
                  <TouchableHighlight>
                    <View style={styles.ar}>
                      <Text style={styles.arText}>Try Ar</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight>
                    <View style={styles.help}>
                      <Text style={styles.helpText}>Need Help?</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={styles.navigation}>
                  <TouchableOpacity onPress={() => this.navigate('Videos')} >
                    <View style={[styles.footerNavigationTabs, this.state.value === 'Videos' ? { borderBottomColor: '#203154' } : null, { marginLeft: 0 }]}>
                      <Text style={[styles.footerNavigationText, this.state.value === 'Videos' ? { color: '#13151E' } : null]}>Videos</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.navigate('Details')}>
                    <View style={[styles.footerNavigationTabs, this.state.value === 'Details' ? { borderBottomColor: '#203154' } : null]}>
                      <Text style={[styles.footerNavigationText, this.state.value === 'Details' ? { color: '#13151E' } : null]}>Details</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.navigate('Guides')}>
                    <View style={[styles.footerNavigationTabs, this.state.value === 'Guides' ? { borderBottomColor: '#203154' } : null]}>
                      <Text style={[styles.footerNavigationText, this.state.value === 'Guides' ? { color: '#13151E' } : null]}>Guides</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bottomContent}>
                <FooterNavigation>{this.state.value}</FooterNavigation>
              </View>
            </View>
          </ScrollView>
        </Modal>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  topContent: {
    flex: 1,
    marginTop: 33,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFFFFF'
  },
  closeLineContainer: {
    paddingTop: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
  },
  closeLine: {
    width: 75,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#ABADBA'
  },
  useContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  swipeContainer: {
    flex: 1
  },
  pickerWrraper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pickerBorder: {
    width: 150,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#E8E9EE',
    borderRadius: 4
  },
  colorPicker: {
    width: 20,
    height: 20,
    paddingLeft: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'red'
  },
  name: {
    fontSize: 24,
    color: '#13151E',
  },
  arContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 25,
  },
  ar: {
    width: 112,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#566FA7',
    borderRadius: 4
  },
  arText: {
    fontSize: 11,
    color: '#FFFFFF'
  },
  help: {
    width: 190,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#203154',
    borderRadius: 4
  },
  helpText: {
    fontSize: 11,
    color: '#FFFFFF'
  },
  navigation: {
    flex: 1,
    flexDirection: 'row'
  },
  bottomContent: {
    flex: 1,
    backgroundColor: '#E8E9EE',
  },
  videoContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    backgroundColor: '#E8E9EE',
  },
  video: {
    height: 196,
    width: '100%'
  },
  videText: {
    fontSize: 16,
    color: '#2F2F34',
    marginTop: 3,
    marginBottom: 15
  },
  footerNavigationTabs: {
    marginLeft: 35,
    paddingBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    shadowColor: '#e1e2e8',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  footerNavigationText: {
    color: '#ABADBA'
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    width: 100,
    height: '100%',
    // paddingTop: 12,
    paddingHorizontal: 10,
    // paddingBottom: 12,
    // borderWidth: 1,
    // borderColor: '#E8E9EE',
    // borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    width: 100,
    height: 40,
    // paddingTop: 12,
    // paddingHorizontal: 10,
    // paddingBottom: 12,
    // borderWidth: 1,
    // borderColor: '#E8E9EE',
    // borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  icon: {
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    borderTopWidth: 2,
    borderTopColor: '#ABADBA',
    borderRightWidth: 2,
    borderRightColor: '#ABADBA',
    width: 10,
    height: 9,
    right: 15,
    top: 10,
    transform: [{ translateY: 8 }, { rotate: '135deg' }],
  },
  chevron: {
    height: 0,
    width: 0
  },
  // viewContainer: {
  // color: 'yellow',
  // backgroundColor: 'yellow',
  // borderWidth: 10,
  // borderColor: 'purple'
  // }
  done: {
    color: '#203154'
  },
  modalViewBottom: {
    backgroundColor: '#FFFFFF'
  },
  modalViewTop: {
    backgroundColor: '#000000',
    opacity: 0.7
  },
  modalViewMiddle: {
    backgroundColor: '#FFFFFF',
  },
  // underline: {
  //   // borderTopWidth: 0,
    // borderWidth: 3,
    // borderColor: 'brown'
  // }
});

export default Garage


// #13151E