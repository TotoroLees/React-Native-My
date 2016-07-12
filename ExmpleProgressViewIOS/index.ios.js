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
    ProgressViewIOS,
  View
} from 'react-native';

class ExmpleProgressViewIOS extends Component {
  state = {
    progress:0,
  }

  componentDidMount() {
    this.updateProgress();
  }

  updateProgress() {
    var progress = this.state.progress + 0.01;
    this.setState({ progress });
    //this.requestAnimationFrame(() => this.updateProgress());
  }

  getProgress(offset){
    var progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) %1;
  }

  //progressViewStyle  ('default', 'bar') 进度条的样式。

  render() {
    return (
        <View style={styles.container}>
          <ProgressViewIOS style={styles.progressView} progress = {this.getProgress(0)} />
          <ProgressViewIOS style={styles.progressView} progressViewStyle="default" progressTintColor="purple" progress={this.getProgress(0.2)}/>
          <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={this.getProgress(0.4)}/>
          <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={this.getProgress(0.6)}/>
          <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={this.getProgress(0.8)}/>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    backgroundColor:'transparent',
  },
  progressView:{
    marginTop:20,
  },
});

AppRegistry.registerComponent('ExmpleProgressViewIOS', () => ExmpleProgressViewIOS);
