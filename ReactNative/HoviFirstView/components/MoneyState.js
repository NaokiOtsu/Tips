import React, { Component } from "react";
import { StyleSheet, Text, View, ART, Dimensions } from "react-native";
import * as d3shape from "d3-shape";

const { Surface, Group, Shape } = ART;

const pieData = [
  { number: 8, name: "Fun activities" },
  { number: 7, name: "Dog" },
  { number: 16, name: "Food" },
  { number: 23, name: "Car" },
  { number: 23, name: "Rent" },
  { number: 4, name: "Misc" }
];

const colors = [
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3"
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    const arcs = d3shape.pie().value(item => item.number)(pieData);
    const pieChart = { paths: [] };
    arcs.map(arc => {
      const path = d3shape
        .arc()
        .outerRadius(90)
        .padAngle(0.05)
        .innerRadius(30)(arc);
      pieChart.paths.push({ path });
    });
    const width = 200;

    return (
      <View style={styles.moneyState}>
        <View style={styles.value}>
          <View style={styles.income}>
            <Text style={styles.incomeTitle}>収入</Text>
            <Text style={styles.incomeValue}>315,171</Text>
          </View>
          <View style={styles.cost}>
            <Text style={styles.costTitle}>支出</Text>
            <Text style={styles.costValue}>274,761</Text>
          </View>
          <View style={styles.payment}>
            <Text style={styles.paymentTitle}>収支</Text>
            <Text style={styles.paymentValue}>40,410</Text>
          </View>
        </View>
        <View style={styles.graph}>
          <Text style={styles.graphTitle}>現在の家計簿状況</Text>
          <View style={{ alignItems: "center" }}>
            <Surface width={width} height={width}>
              <Group x={width / 2} y={width / 2}>
                {pieChart.paths.map((item, index) => (
                  <Shape
                    key={`pie_shape_${index}`}
                    fill={colors[index]}
                    stroke={colors[index]}
                    d={item.path}
                  />
                ))}
              </Group>
            </Surface>
          </View>
          <Text style={styles.graphText}>家計簿の内訳について</Text>
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
