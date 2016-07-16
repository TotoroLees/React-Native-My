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
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import Swiper from 'react-native-swiper';

//horizontal 是否水平滚动
//autoplay 是否自动
//loop 是否循环

class ExmpleSwiper extends Component{

  constructor(props){
    super(props);
    this.state = {
      page:0,
      index:null,
    };
  }

  _onMomentumScrollEnd=(e, state, context)=>{
      this.setState({page:(state.index)});
  }

  _onTouchStart=(e, state, context)=>{
      this.setState({index:(state.index)});
  }

  render() {
  return (
    <View>
      <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>

      <Swiper style={styles.wrapper} height={240} autoplay={true}
        //onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}
        onMomentumScrollEnd = {this._onMomentumScrollEnd}
        onTouchStart = {this._onTouchStart}
        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        paginationStyle={{
          bottom: -23, left: null, right: 10,
        }} loop={true}>
        <View style={styles.slide} title={<Text numberOfLines={1}>{'第' + this.state.page +'页'}</Text>}>
          <Image style={styles.image} source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}} resizeMode= "contain" />
        </View>

        <TouchableWithoutFeedback onPress = {this.show.bind(this,'1')}>
          <View style={styles.slide} title={<Text numberOfLines={2}>{'第' + this.state.page +'页'}</Text>}>
          <Image style={styles.image} source={{uri: 'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/richanglogo168_24.png'}} resizeMode= "contain" />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.slide} title={<Text numberOfLines={1}>{'第' + this.state.page +'页'}</Text>}>
          <Image style={styles.image} source={{uri: 'http://p5.qhimg.com/dr/250_500_/t01a0e7479596db4e72.jpg'}} resizeMode= "contain" />
        </View>
      </Swiper>
      <View  style= {{marginTop:50}}><Text>{'点击第' + this.state.index +'个'}</Text></View>
    </View>
    );
  }

  show(text){
    alert(text);
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height:200,
    width:200,
    marginLeft:50,
  },
});

AppRegistry.registerComponent('ExmpleSwiper', () => ExmpleSwiper);
