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
    Image,
    TouchableOpacity,
  View
} from 'react-native';


var  imgs = ['https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
                  'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/richanglogo168_24.png',
                  'http://p5.qhimg.com/dr/250_500_/t01a0e7479596db4e72.jpg'

];

//source={require(./baidu.png)}

class ExmpleImage19 extends Component {
  render() {
    return (
          <View style = {[styles.flex,{marginTop: 45}]}>
            <MyImage imgs = {imgs}>  </MyImage>
          </View>
    );
  }
}

class MyImage extends Component{
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        count:0,
        imgs:this.props.imgs,
      };
    }

    render(){
      return(
          <View style={[styles.flex,{alignItems:'center'}]}>
            <View style={styles.image}>
              <Image style = {styles.img}
                     resizeMode= "contain"  //按比例自适应缩放
                     source={{uri:this.state.imgs[this.state.count]}}

                />
            </View>

            <View style={styles.btns}>
                <TouchableOpacity onPress={this.goPreview.bind(this)}>
                  <View style={styles.btn}>
                    <Text>上一张</Text>
                  </View>
                </TouchableOpacity>

              <TouchableOpacity onPress={this.goNext.bind(this)}>
                <View style={styles.btn}>
                  <Text>下一张</Text>
                </View>
              </TouchableOpacity>

            </View>

          </View>

      );
    }

  goPreview(){
    var count = this.state.count;
    count--;
    if(count >= 0){
      this.setState({
        count:count,
      });
    }
  }

  goNext(){
    var count = this.state.count;
    count++;
    if (count<this.state.imgs.length){
      this.setState({
        count:count,
      });
    }
  }

}


const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  iamge:{
    borderWidth:1,
    height:150,
    width:200,
    borderRadius:5,
    borderColor:'#0089FF',
    marginTop:20,
  },
  img:{
    height:150,
    width:200,
  },
  btns:{
    flexDirection:'row',   //主轴设置为水平
    marginTop:20,
    justifyContent:'center',  //延主轴方向居中
  },
  btn:{
    width:60,
    height:30,
    borderColor:'#0089FF',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    marginRight:20,
  },
});

AppRegistry.registerComponent('ExmpleImage19', () => ExmpleImage19);
