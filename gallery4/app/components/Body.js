
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <ScrollView style={{flex:1}} >
      <View style={styles.bigview}>
            <View style={styles.smallview}>
            <Image
            style ={styles.myimage}
            source={require('../images/super.jpg')}
            />
          </View>

          <View style={styles.smallview}>
          <Image
          style ={styles.myimage}
          source={require('../images/butter.jpg')}
          />
        </View>
          <View style={styles.smallview}>
          <Image
          style ={styles.myimage}
          source={require('../images/img3.jpg')}
          />
        </View>
          <View style={styles.smallview}>
          <Image
          style ={styles.myimage}
          source={require('../images/img4.jpg')}
          />
        </View>
          <View style={styles.smallview}>
          <Image
          style ={styles.myimage}
          source={require('../images/nature.jpg')}
          />
        </View>
          <View style={styles.smallview}>
          <Image
          style ={styles.myimage}
          source={require('../images/im2.jpg')}
          />
        </View>
          <View style={styles.smallview}>
          <Image
          style ={styles.myimage}
          source={require('../images/image5.jpg')}
          />
        </View>
          <View style={styles.smallview}>
          <Image
          style ={styles.myimage}
          source={require('../images/image6.jpg')}
          />
        </View>



      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // keep ScrollView fex 1 to work scroling property okay
  bigview: {
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  smallview :{
    margin:2,
    height: 100,
    width:(Dimensions.get('window').width /2 - 4),

  },
  myimage:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',

  },

});
