import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import { accelerometer, setUpdateIntervalForType } from 'react-native-sensors';

setUpdateIntervalForType("accelerometer", 80);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceleration: {
        x: 0,
        y: 0,
        z: 0
      }
    };
  }

  componentWillMount() {
    const { width, height } = Dimensions.get('window');
    this.screenWidth = width;
    this.screenHeight = height;
    this.boxWidth = this.screenWidth/10.0

    accelerometer
    .subscribe(acceleration => this.setState({
      acceleration,
    }));
  }
  render() {
    const { acceleration } = this.state;

    return (
      <View style={styles.container}>
        <View style={
          {
            position: 'absolute',
            top: -(this.screenHeight) * (acceleration.y - 1.0)/2.0 - (this.boxWidth/2.0),
            left: this.screenWidth * (acceleration.x + 1.0)/2.0 - (this.boxWidth/2.0),
            width: this.screenWidth/20.0,
            height: this.screenWidth/20.0,
            borderRadius: 40,
            backgroundColor: 'red',
          }
        } />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  textContainer: {
    position: 'absolute',
    top: 40,
  }
});