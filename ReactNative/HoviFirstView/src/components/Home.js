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
          <MoneyState
            costValue={10000}
            ratioValue={100}
            incomeValue={200000}
            paymentValue={20000 - 10000}
            pieData={[
              { value: 10000, name: '趣味', color: '#F44336' },
              { value: 20000, name: '保険', color: '#E91E63' },
              { value: 20000, name: '交際費', color: '#9C27B0' },
              { value: 10000, name: '家賃', color: '#673AB7' },
              { value: 30000, name: '食費', color: '#3F51B5' },
              { value: 10000, name: '雑費', color: '#2196F3' },
            ]}
          />
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
