import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Ball from "./Ball";

import { accelerometer, setUpdateIntervalForType } from 'react-native-sensors';

setUpdateIntervalForType("accelerometer", 16);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceleration: {
        x: 0,
        y: 0
      }
    };
  }

  componentWillMount() {
    accelerometer
      .subscribe(acceleration => this.setState({
        acceleration,
      }));
  }

  render() {
    const { acceleration } = this.state;

    return (
      <View style={styles.table}>
        <Ball x={acceleration.x} y={acceleration.y}></Ball>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    alignItems: "center",
    backgroundColor: "rgb(50,50,180)",
    flexDirection: "column",
    height: 250,
    justifyContent: "center",
    width: 250
  }
});