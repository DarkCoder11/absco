// import React from 'react';
// import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
// // import RNPickerSelect from './debug'

// export default class ColorPicker extends React.Component {
//   constructor(props) {
//     super(props);

//     this.inputRefs = {};


//     // eval is not bad idea

//     this.state = {
//       favColor: 'red',
//       items: [
//         {
//           label: 'Red',
//           value: 'red',
//         },
//         {
//           label: 'Orange',
//           value: 'orange',
//         },
//         {
//           label: 'Blue',
//           value: 'blue',
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>

//         <RNPickerSelect
//           placeholder={{}}
//           items={this.state.items}
//           onValueChange={(value) => {
//             this.setState({
//               favColor: value,
//             });
//           }}
//           // onUpArrow={() => {
//           //   this.inputRefs.name.focus();
//           // }}
//           // onDownArrow={() => {
//           //   this.inputRefs.picker2.togglePicker();
//           // }}
//           style={{ ...pickerSelectStyles }}
//           value={this.state.favColor}
//           // ref={(el) => {
//           //   this.inputRefs.picker = el;
//           // }}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 30,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     width: 100,
//     height: 50,
//     // paddingTop: 12,
//     // paddingHorizontal: 10,
//     // paddingBottom: 12,
//     // borderWidth: 1,
//     // borderColor: '#E8E9EE',
//     // borderRadius: 4,
//     backgroundColor: 'white',
//     color: 'black',
//   },
//   inputAndroid: {
//     fontSize: 16,
//     width: 100,
//     height: 50,
//     // paddingTop: 12,
//     // paddingHorizontal: 10,
//     // paddingBottom: 12,
//     // borderWidth: 1,
//     // borderColor: '#E8E9EE',
//     // borderRadius: 4,
//     backgroundColor: 'white',
//     color: 'black',
//   },
//   icon: {
//     borderLeftWidth: 0,
//     borderLeftColor: 'transparent',
//     borderTopWidth: 2,
//     borderTopColor: 'gray',
//     borderRightWidth: 2,
//     borderRightColor: 'gray',
//     width: 9,
//     height: 9,
//     right: 15,
//     top: 10,
//     transform: [{ translateY: 8 }, { rotate: '135deg' }],
//   }
// });



import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import RNPickerSelect from './debug'

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            favColor: undefined,
            items: [
                {
                    label: 'Red',
                    value: 'red',
                },
                {
                    label: 'Orange',
                    value: 'orange',
                },
                {
                    label: 'Blue',
                    value: 'blue',
                },
            ],
            favSport: undefined,
            items2: [
                {
                    label: 'Football',
                    value: 'football',
                },
                {
                    label: 'Baseball',
                    value: 'baseball',
                },
                {
                    label: 'Hockey',
                    value: 'hockey',
                },
            ],
        };
    }

    componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it
        setTimeout(() => {
            this.setState({
                favColor: 'red',
            });
        }, 1000);

        // parent can also update the `items` prop
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat([{ value: 'purple', label: 'Purple' }]),
            });
        }, 2500);
    }

    render() {
      
        return (
            <View style={styles.container}>
               
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a color...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            favColor: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favColor}
                    ref={(el) => {
                      console.log(el,'1234567890987654567898765678')
                        this.inputRefs.picker = el;
                    }}
                />

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    inputAndroid: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});