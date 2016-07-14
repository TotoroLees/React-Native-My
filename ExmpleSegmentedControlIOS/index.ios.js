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
    SegmentedControlIOS,
    ScrollView
} from 'react-native';

//enabled bool  如果为false，用户不能与此控件交互。默认为true。
//momentary bool  如果为true，选中的段不会一直保持特效。但onValueChange回调还是会正常工作。
//onChange function  当用户点击某一段的时候调用。参数是一个事件对象。
//onValueChange function   当用户点击某一段的时候调用。参数是被选中段的值
//selectedIndex number  组件显示时，一开始被选中的段落的下标。
//tintColor string  被选中的段的颜色。
//values [string]  按顺序每一个段落的标题文字。

class BasicSegmentedControlExample extends  Component{
  render(){
    return(
        <View style={{marginTop:64}}>
          <Text>Segmented controls can have values</Text>
          <View style={{marginBottom:10}}>
            <SegmentedControlIOS
                values = {['One','Two']}
            />
          </View>
          <View>
            <SegmentedControlIOS
                values = {['One','Two','Three','Four','Five']}
            />
          </View>
        </View>
    );
  }
}

class PreSelectedSegmentedControlExample extends  Component{
  render(){
    return(
        <View style={{marginTop:30}}>
          <View>
            <Text>Segmented controls can have a pre-selected value</Text>
            <SegmentedControlIOS
                values = {['One','Two']}
                selectedIndex = {0}
              />
          </View>
        </View>
    );
  }
}

class MomentarySegmentedControlExample extends  Component{
  render() {
    return (
        <View style={{marginTop:30}}>
          <View>
            <Text>Segmented controls can be momentary</Text>
            <SegmentedControlIOS values={['One', 'Two']} momentary={true} />
          </View>
        </View>
    );
  }
}

class DisabledSegmentedControlExample extends  Component{
  render() {
    return (
        <View style={{marginTop:30}}>
          <View>
            <Text>Segmented controls can be disabled</Text>
            <SegmentedControlIOS enabled={false} values={['One', 'Two']} selectedIndex={1} />
          </View>
        </View>
    );
  }
}

class ColorSegmentedControlExample extends  Component{
  render() {
    return (
        <View style={{marginTop:30}}>
          <View style={{marginBottom: 10}}>
            <Text>Custom colors can be provided</Text>
            <SegmentedControlIOS tintColor="#ff0000" values={['One', 'Two', 'Three', 'Four']} selectedIndex={0} />
          </View>
          <View>
            <SegmentedControlIOS tintColor="#00ff00" values={['One', 'Two', 'Three']} selectedIndex={1} />
          </View>
        </View>
    );
  }
}

class EventSegmentedControlExample extends  Component{

  state = {
          values:['One','Two','Three'],
          value:'Not selected',
          selectedIndex: undefined
  }
  render(){
    return(
       <View style={[{marginBottom:20},{marginTop:30}]}>
          <Text  style={styles.text}>
            Value:{this.state.value}
          </Text>
         <Text style={styles.text}>
            Index:{this.state.selectedIndex}
         </Text>
         <SegmentedControlIOS
            values = {this.state.values}
            selectedIndex = {this.state.selectedIndex}
            onChange = {this._onChange.bind(this)}
            onValueChange = {this._onValueChange.bind(this)}
          />

       </View>
    );
  }

  _onChange(event){
    this.setState({
      selectedIndex:event.nativeEvent.selectedSegmentIndex,
    });
  }

  _onValueChange(value){
    this.setState({
      value:value,
    });
  }

}

class ExmpleSegmentedControlIOS extends Component {
  render() {
    return (
        <ScrollView >
          <BasicSegmentedControlExample/>
          <PreSelectedSegmentedControlExample/>
          <MomentarySegmentedControlExample/>
          <DisabledSegmentedControlExample />
          <ColorSegmentedControlExample/>
          <EventSegmentedControlExample/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize:14,
    textAlign:'center',
    fontWeight:'500',
    margin:10,
  },
});

AppRegistry.registerComponent('ExmpleSegmentedControlIOS', () => ExmpleSegmentedControlIOS);
