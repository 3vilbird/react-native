/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from './app//components/Header.js';
import Mid from './app/components/Mid.js';
import Body from './app/components/Body.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Mid />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
  },
});
