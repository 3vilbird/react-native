import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Mid extends Component {
  render() {
    return (
      <View style={styles.mid}>
        <View style={[styles.outer,styles.leftBar]}>
          <Text style={styles.textone}>75+</Text>
          <Text style={styles.textone2}>images</Text>
        </View>
        <View style={styles.outer}>
          <Text style={styles.textone}>85K+</Text>
          <Text style={styles.textone2}>followers</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mid: {
    flexDirection: 'row',
    backgroundColor:'#e60000',
    borderTopWidth:8,
    borderTopColor: '#fff',
    },

outer:{
  flex:1,
  padding:20,
  alignItems: 'center',
},
textone:{
  color:'#fff',
  fontSize: 20,
  fontWeight:'bold',
},
textone2:{
  color:'#fff',
  fontSize: 14,
},
leftBar:{
  borderRightWidth:5,
  borderRightColor: '#fff',
},
});
