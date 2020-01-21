/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Horizontal from './components/Horizontal';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Horizontal/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
