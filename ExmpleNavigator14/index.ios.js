/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Navigator,
    ScrollView,
    PixelRatio
} from 'react-native';

class ExmpleNavigator14 extends Component {
  render(){
          let defaultName = 'List';
          let defaultComponent = List;  //List 作为入口组件
    return(
        <Navigator
            //初始化路由
            initialRoute = {{name: defaultName, component: defaultComponent}}
            //配置场景
            configureScene = {
                  (route) => {
                  //页面间的跳转动画node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                  }
        }
            renderScene = {
              (route, navigator) =>
                  {
                      let Component = route.component;
                      return <Component {...route.params}  navigator = {navigator} />
                      //...route.params 便利所有对象,作为属性
                  }
            }/>
    );
  }
}


class  List extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        author:'hahah',
        id:2,
        user:null,
      };
    }

    _pressButton(){
      const  { navigator } = this.props;

      const self = this;

      if (navigator){
        navigator.push({
            name:'Detail',
            component:Detail,
            params:{
              author:this.state.author,
              id:this.state.id,
              getUser:function(user){
                self.setState({
                  user:user,
                })
              }
            }
        })
      }
    }

    render(){
      if (this.state.user){
        return(
            <View>
              <Text style={styles.alone_list_item}>用户信息:
                {JSON.stringify(this.state.user)}
              </Text>
            </View>

        );
      }else {
        return (
            <ScrollView style = {styles.flex}>
              <View style={ styles.flex_title}>

                <Text style={styles.font}>界面标题</Text>

              </View>


              <Text style={styles.list_item} onPress={this._pressButton.bind(this)}> 把当前的页面push掉1 </Text>
              <Text style={styles.list_item} onPress={this._pressButton.bind(this)}> 把当前的页面push掉2 </Text>
              <Text style={styles.list_item} onPress={this._pressButton.bind(this)}> 把当前的页面push掉3 </Text>

            </ScrollView>
        );
      }
    }
}


const  USER_MODELS = {
   1:{name:'mot', age:23},
   2:{name:'marry', age: 25}
};

class Detail extends  Component{
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        id : null
      };
    }

  //组件加载完成之后调用
  componentDidMount() {
      this.setState({
        author:this.props.author,
        id : this.props.id
      });
  }

      _pressButton(){
          const { navigator } = this.props;

          if (this.props.getUser){
            let user = USER_MODELS[this.props.id];
            this.props.getUser(user);
          }


          if ( navigator ){
            navigator.pop();
          }
      }

      render(){
        return(
            <ScrollView>
              <Text style={styles.alone_list_item}> 传递过来的用户id是: {this.state.id}</Text>

                <Text style={styles.list_item} onPress={this._pressButton.bind(this)}> 作者是: {this.state.author} </Text>

            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
    flex:{
      flex:1,
      //marginTop:20,
    },
    list_item:{
      height:30,
      marginLeft:10,
      marginRight:10,
      marginTop:10,
      //margin:20,
      fontSize:20,
      borderBottomWidth:1,
      borderBottomColor:'#ddd',
      justifyContent:'center',
    },

    flex_title:{
      marginTop:30,
      height:30,
      borderBottomWidth:3/PixelRatio.get(),
      borderBottomColor:'#EF2D36',
      alignItems:'center',
    },

    font:{
      fontSize:20,
    },

    alone_list_item:{
      height:50,
      marginLeft:10,
      marginRight:10,
      marginTop:50,
      //margin:20,
      fontSize:15,
      borderBottomWidth:1,
      borderBottomColor:'#ddd',
      justifyContent:'center',
    },
});

AppRegistry.registerComponent('ExmpleNavigator14', () => ExmpleNavigator14);
