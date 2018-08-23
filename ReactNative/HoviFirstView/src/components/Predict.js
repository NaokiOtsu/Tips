import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from 'moment';

const month = moment().format('M');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>● {month}月収支最終着地予測</Text>
        <View style={styles.box}>
          <Text style={styles.text}>前年比率 XXX%増 予測</Text>
          <Text style={styles.value}>XX,XXX</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    paddingLeft: 10,
  },
  box: {
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
