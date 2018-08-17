/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from "react";
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from "react-native";

import Footer from "./Footer";
import MoneyState from "./MoneyState";

const Household = ({ createdAt, costRatio, mostCostName, costList, costValue, incomeValue, currentCosts }) => (
  <View style={styles.container}>
    <ScrollView>

      <View style={styles.dateWrapper}>
        <Text>＜</Text>
        <Text>{createdAt}</Text>
        <Text>＞</Text>
      </View>

      <MoneyState
        isHousehold={true}
        costValue={costValue}
        ratioValue={costRatio}
        incomeValue={incomeValue}
        paymentValue={incomeValue - costValue}
        pieData={currentCosts}
      />

      <Text style={styles.stateCautionText}>
        {`前月よりも${costRatio}%消費が速いペースとなります。\n主に「${mostCostName}」勘定科目のペースが他項目に比べ早いです。`}
      </Text>

      <Text style={styles.costTitle}>支出内訳</Text>

      <View style={styles.costSortButton}>
        <TouchableOpacity style={styles.moneySortButton}>
          <Text style={styles.moneySortButtonText}>金額順</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratioSortButton}>
          <Text style={styles.ratioSortButtonText}>対比順</Text>
        </TouchableOpacity>
      </View>

      {costList.map((cost, index) => (
        <View style={styles.costList} key={index}>
          <Text style={styles.contTitle}>{cost.name}</Text>
          <Text style={styles.costValue}>{cost.value}円</Text>
          <Text style={styles.contRatio}>{cost.ratio}% ></Text>
        </View>
      ))}

      <TouchableOpacity>
        <Text style={styles.inputTimeLineButton}>入金履歴タイムライン▼</Text>
      </TouchableOpacity>

    </ScrollView>
    <Footer />
  </View>
);

export default Household;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  dateWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: '#ddd',
  },
  stateCautionText: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  costTitle: {
    marginTop: 15,
    marginBottom: 10,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#ddd',
  },
  costSortButton: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
  },
  moneySortButton: {
    flex: 1,
  },
  ratioSortButton: {
    flex: 1,
  },
  moneySortButtonText: {
    marginRight: 10,
    padding: 5,
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    backgroundColor: '#9C27B0',
    overflow: "hidden",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#9C27B0"
  },
  ratioSortButtonText: {
    marginBottom: 10,
    padding: 5,
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    backgroundColor: '#999',
    overflow: "hidden",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999"
  },
  costList: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  contTitle: {
    width: 80,
    marginRight: 5,
    padding: 5,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#2196F3',
    overflow: "hidden",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2196F3",
  },
  costValue: {
    flex: 1,
    marginRight: 5,
    fontSize: 20,
    textAlign: 'right',
  },
  contRatio: {
    textAlign: "center",
    fontSize: 14
  },
  inputTimeLineButton: {
    margin: 10,
    padding: 5,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#bbb',
    overflow: "hidden",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#bbb",
  }
});
