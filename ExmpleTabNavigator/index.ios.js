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
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import TestPage from './TestPage';

class ExmpleTabNavigator extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'home',
    };
  }


  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected = {this.state.selectedTab == 'home'}
          title = "Home"
          renderIcon = {()=> <Image style={styles.img} source = {require('./navc_03.png')}/>}
          renderSelectedIcon = {()=><Image style={styles.img} source = {require('./navc_03_cur.png')}/>}
          badgText = '61'
          onPress = {()=>this.setState({selectedTab:'home'})}>
          <View style = {{flex:1,backgroundColor:'#fff',justifyContent:'center'}}>
            <Text style = {{fontSize:20}}> 第一个 </Text>
          </View>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected = {this.state.selectedTab == 'profile'}
          title = "Profile"
          renderIcon = {()=> <Image style={styles.img} resizeMode = "contain" source = {require('./navc_07.png')}/>}
          renderSelectedIcon = {()=> <Image style={styles.img} source = {require('./navc_07_cur.png')}/>}
          onPress = {()=> this.setState({selectedTab:'profile'})}>

          <TestPage/>

        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  img:{
    height:40,
    width:40,
    marginBottom : -10,
  },
});

AppRegistry.registerComponent('ExmpleTabNavigator', () => ExmpleTabNavigator);
