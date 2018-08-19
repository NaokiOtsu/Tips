import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Actions,
} from 'react-native-router-flux';
import moment from 'moment';

const month = moment().format('MM');
const month0 = month.split('')[0];
const month1 = month.split('')[1];

const date = moment().format('DD');
const date0 = date.split('')[0];
const date1 = date.split('')[1];

const today = moment().format('MM月DD日');
const todayNextMonth = moment().add(1, 'months').format('MM月DD日');

export default () => (
  <View style={styles.header}>
    <View style={styles.logo}>
      <Text style={styles.logoText} onPress={Actions.Household}>Touch Life</Text>
    </View>
    <View style={styles.date}>
      <View style={styles.todayWrapper}>
        <Text style={[styles.today]}>{month0}</Text>
        <Text style={[styles.today]}>{month1}</Text>
        <Text style={[styles.today]}>{date0}</Text>
        <Text style={[styles.today]}>{date1}</Text>
      </View>
      <Text style={styles.period}>{today}〜{todayNextMonth}</Text>
    </View>
  </View>
);

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
