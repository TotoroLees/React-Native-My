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
    PickerIOS
} from 'react-native';

var PickerItemIOS = PickerIOS.Item;

var CAR_MAKES_AND_MODELS = {
  amc: {
    name: 'AMC',
    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
  },
  alfa: {
    name: 'Alfa-Romeo',
    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
  },
  aston: {
    name: 'Aston Martin',
    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
  },
  audi: {
    name: 'Audi',
    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
  },
  austin: {
    name: 'Austin',
    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
  },
  borgward: {
    name: 'Borgward',
    models: ['Hansa', 'Isabella', 'P100'],
  },
  buick: {
    name: 'Buick',
    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
      'Roadmaster', 'Skylark'],
  },
  cadillac: {
    name: 'Cadillac',
    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
      'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
  },
};



class ExmplePicker20 extends Component {

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        carMake:'amc',
        modelIndex:0,
      };
    }


  render() {
    var  make = CAR_MAKES_AND_MODELS[this.state.carMake];
    var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
    return (
        <View style = {[styles.flex, {marginTop:40}]}>
          <Text style ={styles.text}>Please choose a make for your car:</Text>

          <PickerIOS
              itemStyle={styles.pickerStyle}  //指定应用在每项标签上的样式。
              selectedValue = {this.state.carMake}  //默认选中的值。可以是字符串或整数。
              //onValueChange 某一项被选中时执行此回调
              onValueChange = {(carMake) => this.setState({carMake,modelIndex:0})}>
            {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
                <PickerItemIOS
                    key = {carMake}
                    value = {carMake}
                    label = {CAR_MAKES_AND_MODELS[carMake].name}
                />
            ))}
          </PickerIOS>
          <Text>Please choose a model of {make.name}</Text>

          <PickerIOS
                selectedValue = {this.state.modelIndex}
                onValueChange = {(modelIndex) => this.setState({modelIndex})}>
                {CAR_MAKES_AND_MODELS[this.state.carMake].models.map((modelName,modelIndex) =>(
                    <PickerItemIOS
                        key = {this.state.carMake + '_' + modelIndex}
                        value = {modelIndex}
                        label = {modelName}
                    />
                ))}
          </PickerIOS>
          <Text>You selected: {selectionString}</Text>

        </View>

        //<View style = {[styles.flex, {marginTop:40}]}>
        //  <Text>Picker组件</Text>
        //
        //  <PickerIOS
        //      selectedValue = {this.state.language}
        //      onValueChange = {(lang) =>this.setState({language: lang})}
        //      mode = "dialog"
        //
        //      >
        //
        //
        //      <PickerIOS.Item label = "java" value="java "/>
        //      <PickerIOS.Item label = "JavaScript" value="js"/>
        //
        //  </PickerIOS>
        //
        //  <Text>{this.state.language}</Text>
        //
        //</View>
    );
  }
}


const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  pickerStyle:{
    fontSize:25,
    color:'red',
    textAlign:'center',
    fontWeight:'bold',
  },
  text:{
    textAlign:'center',
  },
});


AppRegistry.registerComponent('ExmplePicker20', () => ExmplePicker20);
