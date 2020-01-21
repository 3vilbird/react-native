/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class Compoimg extends Component {
  render() {
    return (
      <View>
      <Image
      source={this.props.ImageSource}
      style={styles.images}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    height:200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
