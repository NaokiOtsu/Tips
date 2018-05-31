/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import Profile from "./components/Profile";
import MoneyState from "./components/MoneyState";
import InputLink from "./components/InputLink";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    console.log("hogehoge");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Profile />
        <MoneyState />
        <InputLink />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0
  }
});
