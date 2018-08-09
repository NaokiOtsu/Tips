/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, ScrollView, Text, View } from "react-native";

import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import MoneyState from "./MoneyState";
import InputLink from "./InputLink";
import CostManagement from "./CostManagement";
import Predict from "./Predict";
import CostManagementChange from "./CostManagementChange";
import Recent from "./Recent";
import News from "./News";

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
    paddingBottom: 50
  }
});
