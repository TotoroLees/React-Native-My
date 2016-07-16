import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';

const window = Dimensions.get('window');


export default class Menu extends Component {
  static propTypes = {
    onItemSelected:React.PropTypes.func.isRequired,
  };

  render(){
    return(
      <ScrollView scrollsToTop = {false} style = {styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style = {styles.avatar}
            source = {require('./center01_05.png')}/>
          <Text style={styles.name}>Your Name</Text>
        </View>

        <Text
          onPress = {()=> this.props.onItemSelected('About')}
          style = {styles.item}>
          About
        </Text>

        <Text
          onPress = {()=> this.props.onItemSelected('Contacts')}
          style = {styles.item}>
          Contacts
        </Text>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'white',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});
