import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>あなたに合わせた支出管理項目に変更可能です。</Text>
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
    padding: 10,
  },
  text: {
    flex: 1,
    marginRight: 10,
    lineHeight: 16,
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
