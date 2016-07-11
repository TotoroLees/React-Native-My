/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
}from 'react-native';

class ExmpleView12 extends Component{
  render(){
      return(
          <View  style = {styles.flex}>
            <View style = {styles.contatiner}>

                 <View style = {[styles.item,styles.center]}>
                        <Text style={styles.font}>快餐</Text>
                    </View>

                  <View style={[styles.item,styles.lineLeftRight]}>
                      <View style={[styles.flex,styles.center,styles.lineCenter]}>
                           <Text style={styles.font}>水果</Text>
                       </View>

                        <View style={[styles.center,styles.flex]}>
                            <Text style={styles.font}>蔬菜</Text>
                          </View>
                  </View>

                    <View style={[styles.item]}>
                        <View style={[styles.center,styles.flex,styles.lineCenter]}>
                            <Text style={styles.font}>水果</Text>
                          </View>
                      <View style={[styles.center,styles.flex]}>
                        <Text style={styles.font}>蔬菜</Text>
                      </View>
                  </View>

              </View>
          </View>
    );
  }
}

const styles  = StyleSheet.create({
  flex:{
        flex:1,
  },
  contatiner:{
        marginTop:200,
        marginRight:5,
        marginLeft:5,
        height:84,
        flexDirection:'row',
        borderRadius:5,
        padding:2,
        backgroundColor:'#FF0067',
  },
  item:{
        flex:1,
        height:80,
  },
  center:{
        justifyContent:'center',
        alignItems:'center',
  },
  font:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
  },
  lineLeftRight:{
        borderLeftWidth:1/ PixelRatio.get(),
        borderRightWidth:1/PixelRatio.get(),
        borderColor:'#fff',
  },
   lineCenter:{
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#fff',
   },

});

AppRegistry.registerComponent('ExmpleView12',() => ExmpleView12);
