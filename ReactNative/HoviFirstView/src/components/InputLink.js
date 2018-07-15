import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.scanReceipt}>
          <Text style={styles.scanReceiptText}>レシート読取</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputMoney}>
          <Text style={styles.inputMoneyText}>金額入力</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30
  },
  scanReceipt: {
    flex: 1,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    overflow: "hidden",
    backgroundColor: "#ddd",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  scanReceiptText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center"
  },
  inputMoney: {
    flex: 1,
    marginLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
    overflow: "hidden",
    backgroundColor: "#ddd",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  inputMoneyText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center"
  }
});
