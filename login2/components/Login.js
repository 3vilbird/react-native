/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import Loginform from './Loginform';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo}
           source={require('./images/gana.png')}
          />
          <Text style={styles.textcol} > welcome to devil's army </Text>
        </View>
        <View style={styles.myform} >
         <Loginform />
        </View>
     </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#282830',
    width: Dimensions.get('window').width,
  },
  logocontainer:{
    flexGrow:1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 100,
    height: 100,
  },
myform:{
flex:1,


  },
textcol:{
  marginTop:10,
  color:'#2dfc04',
  fontSize: 20,
  fontWeight:'bold',
  fontFamily:'serif',
  fontStyle: 'italic',

},
});
