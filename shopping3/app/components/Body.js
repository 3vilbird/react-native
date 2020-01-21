/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import Compoimg from './Compoimg';

export default class Body extends Component {
  render() {
    return(

     <ScrollView>
      <View style={styles.container}>
         <View style={styles.col1}  >
         <Compoimg ImageSource={require('../img/mac.jpg')} />
         </View>
         <View style={styles.col2}>
          <Compoimg ImageSource={require('../img/mac3.jpg')} />
         </View>
         <View style={styles.full}  >
         <Compoimg ImageSource={require('../img/black.jpg')} />
         </View>
         <View style={styles.col2}  >
         <Compoimg ImageSource={require('../img/img6.jpg')} />
         </View>
         <View style={styles.col1}>
          <Compoimg ImageSource={require('../img/images6.jpg')} />
         </View>
         <View style={styles.full}  >
         <Compoimg ImageSource={require('../img/images6.jpg')} />
         </View>
      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    padding: 5,
    backgroundColor:'#33ffbb',
  },
  col1:{
    flex:1,
    padding:5,


  },
  col2:{
flex:2,
padding:5,

  },
  full:{
  width:'100%',
  padding:5,

  },
});
