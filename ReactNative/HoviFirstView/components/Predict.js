import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>前年比率 +121%増 予測</Text>
        <Text style={styles.value}>30,400</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#efefef"
  },
  value: {
    fontSize: 30
  }
});
