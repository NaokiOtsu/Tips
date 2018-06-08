/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, ScrollView, Text, View } from "react-native";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import MoneyState from "./components/MoneyState";
import InputLink from "./components/InputLink";
import CostManagement from "./components/CostManagement";
import Predict from "./components/Predict";
import CostManagementChange from "./components/CostManagementChange";
import Recent from "./components/Recent";
import News from "./components/News";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <Profile />
          <MoneyState />
          <InputLink />
          <CostManagement />
          <Predict />
          <CostManagementChange />
          <Recent />
          <News />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    paddingBottom: 50
  }
});
