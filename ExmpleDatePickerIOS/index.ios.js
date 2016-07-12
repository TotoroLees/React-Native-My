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
    TextInput,
    DatePickerIOS,
    ScrollView,
  View
} from 'react-native';

class ExmpleDatePickerIOS extends Component {

  static defaultProps = {
    date: new  Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };

  state = {
    date:this.props.date,
    timeZoneOffsetInHours:this.props.timeZoneOffsetInHours,
  }

  onDateChange(date){
    this.setState=({
          date:date,
      });
  }

  onTimezoneChange(event){
    var  offset = parseInt(event.nativeEvent.text,10);
    if (isNaN(offset)){
      return;
    }
    this.setState =({
      timeZoneOffsetInHours:offset,
    });
  }


  render() {
    //var dateString1 =

    return (
      <ScrollView style= {{marginTop: 20}}>
        <WithLabel label = "Value:">
          <Text >
            {this.state.date.toLocaleDateString() + ' ' + this.state.date.toLocaleTimeString()}
          </Text>
        </WithLabel>

        <WithLabel label = "Timezone:">
          <TextInput
              onChange = {this.onTimezoneChange}
              style={styles.textinput}
              value={this.state.timeZoneOffsetInHours.toSting}
            />
          <Text>hours from UTC</Text>
        </WithLabel>

        <Heading label = "Date + time picker" ><Text>{this.state.date}</Text></Heading>
        <DatePickerIOS
            date = {this.state.date}
            mode = "datetime"  //选择器模式
            timeZoneOffsetInMinutes = {this.state.timeZoneOffsetInHours * 60}  //时区差，单位是分钟
            onDateChange ={this.onDateChange}//当用户修改日期或时间时调用此回调函数。
          />

        <Heading  label = "date picker"/>
        <DatePickerIOS
            date={this.state.date}
            mode="date"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />

        <Heading label="Time picker, 10-minute interval" />
        <DatePickerIOS
            date={this.state.date}
            mode="time"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
            minuteInterval={10}  //可选的最小的分钟单位。
            //minimumDate 可选的最小日期。
        />
      </ScrollView>
    );
  }
}

class WithLabel extends Component{
  render(){
    return(
      <View style={styles.labelContainer}>
        <View style={styles.labelView}>
          <Text style={styles.label}>
            {this.props.label}
          </Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

class  Heading extends  Component{
  render(){
    return(
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    height: 26,
    width: 50,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
  },
  labelContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:2,
  },
  labelView:{
    marginRight:10,
    paddingVertical:2,
  },
   label:{
    fontWeight:'bold',
  },
  headingContainer: {
    padding: 4,
        backgroundColor: '#f6f7f8',
  },
  heading: {
    fontWeight: '500',
      fontSize: 14,
  },
});

AppRegistry.registerComponent('ExmpleDatePickerIOS', () => ExmpleDatePickerIOS);
