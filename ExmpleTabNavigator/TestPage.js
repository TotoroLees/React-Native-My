import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class TestPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedTab:'home',
  //   };
  // }

  render(){
    return(
        <View style = {{flex:1,backgroundColor:'#eee',justifyContent:'center'}}>
          <Text style = {{fontSize:20,color:'#f00'}}>
            我是TestPage,导入使用的
          </Text>
        </View>
    );
  }
}
