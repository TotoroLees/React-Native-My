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
    TextInput,
    PixelRatio,
    ScrollView,
    TouchableHighlight
} from 'react-native';

var onePT = 1 / PixelRatio.get();

class ExmpleTextInput17 extends Component {
  render() {
    return (
            <View style={[styles.flex,styles.topStatus]}>
                <Search></Search>

            </View>
    );
  }
}

class Search extends  Component{
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        show:false,
        value:null,
      };
    }

  hide(val){
    this.setState({
          show: false,
          value: val,
        });
  }

  getValue(text){
    this.setState({
      show:true,
      value:text,
    });
  }


   render(){
     return(
       <View style={styles.flex}>
         <View style={styles.flexDirection}>
           <View style={styles.flex}>
              <TextInput
                  style={styles.input}
                          keyboardType = "web-search"
                          placeholder = "请输入关键词"
                          value = {this.state.value}
                  clearButtonMode = "always"
                          onChangeText = {this.getValue.bind(this)} />

           </View>

           <View style={styles.btn}>
               <Text style={styles.search} onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
           </View>

         </View>

         {this.state.show?
             <View style={styles.result}>
               <Text onPress={this.hide.bind(this,this.state.value + '平台')}
                         style = {styles.item} numberOfLines={1}> {this.state.value} 平台</Text>
               <Text onPress={this.hide.bind(this,this.state.value + '插件')}
                         style = {styles.item} numberOfLines={1}> {this.state.value} 插件</Text>
               <Text onPress={this.hide.bind(this,60+this.state.value + '更新')}
                     style = {styles.item} numberOfLines={1}>60 {this.state.value} 更新</Text>
               <Text onPress={this.hide.bind(this,this.state.value + '今天')}
                     style = {styles.item} numberOfLines={1}> {this.state.value} 今天</Text>
               <Text onPress={this.hide.bind(this,'上午' +this.state.value)}
                     style = {styles.item} numberOfLines={1}>上午{this.state.value}</Text>

             </View>
              :null
         }
       </View>
     );
   }
}

const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  flexDirection:{
    flexDirection:'row',
  },
  input:{
    height:50,
    borderColor:'red',
    borderWidth:1,
    marginLeft:10,
    paddingLeft:10,
    borderRadius:5,
  },
  btn:{
    width:45,
    marginLeft:-5,
    marginRight:5,
    backgroundColor:'#23BEFF',
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
  },
  topStatus:{
    marginTop:25,
  },
  result:{
    marginTop:onePT,
    marginRight:5,
    marginLeft:18,
    height:200,
  },
  item:{
    marginTop:16,
    paddingTop:5,
    paddingBottom:10,
  },
});

AppRegistry.registerComponent('ExmpleTextInput17', () => ExmpleTextInput17);
