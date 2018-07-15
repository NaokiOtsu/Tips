import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Actions,
} from 'react-native-router-flux';

type Props = {};
export default class App extends Component<Props> {
  hoge() {
    Actions.PageB();
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText} onPress={this.hoge}>Touch Life</Text>
        </View>
        <View style={styles.date}>
          <View style={styles.todayWrapper}>
            <Text style={[styles.today]}>1</Text>
            <Text style={[styles.today]}>0</Text>
            <Text style={[styles.today]}>1</Text>
            <Text style={[styles.today]}>1</Text>
          </View>
          <Text style={styles.period}>09月25日〜10月25日</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#4fc08d"
  },
  logoText: {
    color: "#fff",
    fontSize: 30
  },
  todayWrapper: {
    flexDirection: "row"
  },
  today: {
    flex: 1,
    marginRight: 3,
    textAlign: "center",
    color: "#333",
    fontSize: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#fff"
  },
  today1: {},
  period: {
    marginTop: 5,
    color: "#fff",
    fontSize: 12
  }
});
