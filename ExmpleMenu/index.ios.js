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
  TouchableOpacity,
  Image
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Menu from './Menu';


class Button extends Component {
  handlePress(e){
    if(this.props.onPress){
      this.props.onPress(e);
    }
  }

  render(){
    return(
      <TouchableOpacity
        onPress = {this.handlePress.bind(this)}
        style = {this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

class ExmpleMenu extends Component {

  state = {
    isOpen : false,
    selectedItem:'About',
  };

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen){
    this.setState({isOpen});
  }

  onMenuItemSelected = (item)=>{
    this.setState({
      isOpen:false,
      selectedItem:item,
    });
  }

  render() {
    const menu = <Menu onItemSelected = {this.onMenuItemSelected}/>;

    return (
      <SideMenu
        menu = {menu}
        isOpen = {this.state.isOpen}
        onChange =  {(isOpen)=> this.updateMenuState(isOpen)}>

        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Text>{this.state.selectedItem}</Text>
        </View>

        <Button style = {styles.button} onPress = {()=> this.toggle()}>
          <Image style={styles.img} source = {require('./center01_05.png')}/>
        </Button>
      </SideMenu>
    );
  }
}




const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  img:{
    width:32,
    height:32,
  },
});

AppRegistry.registerComponent('ExmpleMenu', () => ExmpleMenu);
