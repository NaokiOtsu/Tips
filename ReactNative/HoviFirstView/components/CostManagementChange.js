import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>前年比率 +121%増 予測</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>支出管理項目を変更</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  text: {
    marginRight: 10
  },
  button: {
    padding: 20,
    overflow: "hidden",
    backgroundColor: "#ddd",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#ddd"
  }
});
