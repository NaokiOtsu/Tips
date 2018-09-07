/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
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

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

const Home = ({ costRatio, costValue, incomeValue, currentCosts, beforeCosts, beforeDate }) => (
  <View style={styles.container}>
    <ScrollView>
      <Header />
      <Profile />
      <MoneyState
        costValue={costValue}
        ratioValue={costRatio}
        incomeValue={incomeValue}
        paymentValue={incomeValue - costValue}
        pieData={currentCosts}
      />
      <InputLink />
      <CostManagement
        costs={currentCosts.slice(0, 3)}
        beforeCosts={beforeCosts.slice(0, 3)}
        beforeDate={beforeDate} />
      <Predict />
      <CostManagementChange />
      <Recent
        costs={currentCosts.slice(0, 3)} />
      <News />
    </ScrollView>
    <Footer />
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  }
});
