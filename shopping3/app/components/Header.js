/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
        source={require('../img/cart.png')}
        style={styles.logo}

        />
        <Text style={styles.title} >My shopping cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height:80,
    width:Dimensions.get('window').width,
    marginTop:0,
    flexDirection:'row',
    backgroundColor:'#bfbfbf',
    alignItems:'center',
    padding:20,
    borderBottomWidth:5,
    borderBottomColor:'#ccc',
  },
  logo:{
   height:100,
   width:100,
   marginTop:10,
    },
  title:{
      marginTop:10,
      color:'#000',
      fontWeight:'bold',
      fontSize:15,
      fontStyle:'italic',

    },
});
