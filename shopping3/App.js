/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from './app/components/Header';
import Hero from './app/components/Hero';
import Body from './app/components/Body';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Hero/>
        <Body/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
