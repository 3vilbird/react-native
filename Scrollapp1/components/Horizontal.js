/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView horizontal={true}  pagingEnabled={true} style={styles.container} >
      <View style={styles.outer}>
          <Text style={styles.inner} >Hello welcome to linux army</Text>
          </View>
          <View style={[styles.outer,styles.outer1]}>
              <Text style={styles.inner} >The place to develop your skill</Text>
          </View>
          <View style={[styles.outer,styles.outer2]}>
              <Text style={styles.inner} >Be the root</Text>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
container:{


  },

  outer: {
    backgroundColor:'#3385ff',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  outer1:{
    backgroundColor:'#000',
    },
  outer2:{
    backgroundColor:'#00b300',
      },
  inner:{
    color:"#fff",
    fontSize:25,
    fontWeight:'bold',
    },
});
