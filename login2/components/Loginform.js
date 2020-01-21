/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Loginform extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput
      placeholder="Username"
      style={styles.input}
      />
      <TextInput
      placeholder="password"
      style={styles.input}
      />
      <TouchableOpacity  style={styles.buttoncontainer} >
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  input:{
   height:40,
   backgroundColor:'rgba(255,255,255,0.8)',
   padding:10,
   marginBottom:17,
},
buttoncontainer:{
  backgroundColor:'#278e60',
  paddingVertical:15,
  },
buttontext:{
textAlign:'center',
color:'#fff',
fontWeight:'bold',
 },
});
