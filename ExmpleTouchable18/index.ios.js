/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    PixelRatio
} from 'react-native';

var onePT = 1/PixelRatio.get();

class ExmpleTouchable18 extends Component {
    render(){
      return(
          <View style={styles.flex}>

            <TouchableHighlight onPress={this.show.bind(this,'欢迎学习React Native技术')}
                                underlayColor= '#E1F6FF'>
                <Text style={styles.item}> 欢迎学你React Native 技术-TouchableHighlight</Text>
            </TouchableHighlight>


            <TouchableOpacity onPress={this.show.bind(this,'欢迎学习React Native技术')}>
                <Text style={styles.item}>  欢迎学你React Native 技术- TouchableOpacity</Text>

            </TouchableOpacity>


            <TouchableWithoutFeedback onPress={this.show.bind(this,'欢迎学习React Native技术')}>
              <Text style={styles.item}>  欢迎学你React Native 技术- TouchableWithoutFeedback</Text>

            </TouchableWithoutFeedback>

          </View>
      );
    }

  show(text){
    alert(text);
  }

}

const styles = StyleSheet.create({
  flex:{
    flex:1,
    marginTop:25,
  },
  item:{
    fontSize:18,
    color:'#434343',
    marginLeft:5,
    marginRight:10,
    marginTop:10,
  },
  button:{
    width: 38,
    height: 38,
  },

});

AppRegistry.registerComponent('ExmpleTouchable18', () => ExmpleTouchable18);
