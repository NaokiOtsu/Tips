import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import PieGraph from './PieGraph';

import {
  Actions,
} from 'react-native-router-flux';

const incomeValue = 300000;
const pieData = [
  { number: 40000, name: '趣味', color: '#F44336' },
  { number: 20000, name: '保険', color: '#E91E63' },
  { number: 20000, name: '交際費', color: '#9C27B0' },
  { number: 10000, name: '家賃', color: '#673AB7' },
  { number: 30000, name: '食費', color: '#3F51B5' },
  { number: 60000, name: '雑費', color: '#2196F3' },
];
const beforePieData = [
  { number: 20000, name: '趣味', color: '#F44336' },
  { number: 10000, name: '保険', color: '#E91E63' },
  { number: 10000, name: '交際費', color: '#9C27B0' },
  { number: 50000, name: '家賃', color: '#673AB7' },
  { number: 10000, name: '食費', color: '#3F51B5' },
  { number: 10000, name: '雑費', color: '#2196F3' },
];
const costValue = pieData.reduce((a, b) => a + b.number, 0);
const beforeCostValue = beforePieData.reduce((a, b) => a + b.number, 0);
const paymentValue = incomeValue - costValue;
const ratioValue = Math.floor(costValue / beforeCostValue * 100);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.moneyState}>
        {(() => {
          if (this.props.isHousehold) {
            return (
              <View style={styles.value}>
                <View style={styles.cost}>
                  <Text style={styles.costTitle}>支出</Text>
                  <Text style={styles.costValue}>{costValue.toLocaleString()}</Text>
                </View>
                <View style={styles.ratio}>
                  <Text style={styles.ratioTitle}>前月同時期対比</Text>
                  <Text style={styles.ratioValue}>{ratioValue.toLocaleString()}%</Text>
                </View>
                <View style={styles.ratioButton}>
                  <TouchableOpacity style={styles.beforeMonthRatioButton}>
                    <Text style={styles.beforeMonthRatioButtonText}>前月対比</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.beforeYearRatioButton}>
                    <Text style={styles.beforeYearRatioButtonText}>去年対比</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          } else {
            return (
              <View style={styles.value}>
                <View style={styles.income}>
                  <Text style={styles.incomeTitle}>収入</Text>
                  <Text style={styles.incomeValue}>{incomeValue.toLocaleString()}</Text>
                </View>
                <View style={styles.cost}>
                  <Text style={styles.costTitle}>支出</Text>
                  <Text style={styles.costValue}>{costValue.toLocaleString()}</Text>
                </View>
                <View style={styles.payment}>
                  <Text style={styles.paymentTitle}>収支</Text>
                  <Text style={styles.paymentValue}>{paymentValue.toLocaleString()}</Text>
                </View>
              </View>
            );
          }
        })()}
        <View style={styles.graph}>
          <Text style={styles.graphTitle}>現在の家計簿状況</Text>
          <PieGraph pieData={pieData} />
          {(() => {
            if (!this.props.isHousehold) return <Text style={styles.graphText} onPress={Actions.Household}>家計簿の内訳について</Text>;
          })()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  moneyState: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  value: {
    flex: 1
  },
  graph: {
    flex: 1
  },
  income: {
    marginBottom: 10
  },
  incomeTitle: {
    fontSize: 12
  },
  incomeValue: {
    color: "#12a828",
    fontSize: 40
  },
  cost: {
    marginBottom: 10
  },
  costTitle: {
    fontSize: 12
  },
  costValue: {
    color: "#ff4949",
    fontSize: 40
  },
  ratio: {
    marginBottom: 10
  },
  ratioTitle: {
    fontSize: 12
  },
  ratioValue: {
    color: "#12a828",
    fontSize: 40
  },
  ratioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  beforeMonthRatioButtonText: {
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
  beforeYearRatioButtonText: {
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
  paymentTitle: {
    fontSize: 12
  },
  paymentValue: {
    color: "#333",
    fontSize: 40
  },
  graphTitle: {
    textAlign: "center"
  },
  graphText: {
    textAlign: "center"
  }
});
