/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import HeroText from './HeroText';


export default class Hero extends Component {
  render() {
    return (
      <ImageBackground
      source={require('../img/lol.jpg')}
      style={styles.hero}>
      <HeroText />
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  hero: {
    height:250,
    width:Dimensions.get('window').width,
    padding:5,

  },
});
