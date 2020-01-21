/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground
      style={styles.headerbg}
      source={require('../images/my.jpg') }
      >
          <View style={styles.headercontainer}  >
            <View style={styles.profilepiccontainer} >
              <Image
              style={styles.myprofilepic}
              source={require('../images/gana.jpg')}
              />
            </View>
            <Text style={styles.name} >Black Devil</Text>
            <Text style={styles.liner} >A network admin...!</Text>
          </View>

      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    flex: 1,
    width:null,
    alignSelf:'stretch',

  },
  headercontainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:20,
    backgroundColor:'rgba(0,0,0,0.4)', // this wiil makes background blure the last parameter opacity

    },
  profilepiccontainer:{
    width:180,
    height:180,
    borderRadius:90,
    borderWidth:10,
    backgroundColor:'rgba(0,0,0,0.1)',//for the outer circle
    },
  myprofilepic:{
    flex:1,
    width:null,
    alignSelf:'stretch',
    borderRadius:90,
    borderWidth:4,
    borderColor:"#fff",

    },
  name:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
    marginTop:10,
    },
  liner:{
    color:'#fff',
    fontSize:14,
    fontStyle:'italic',
    marginTop:5,




    },



});
