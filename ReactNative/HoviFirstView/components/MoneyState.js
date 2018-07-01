import React, { Component } from "react";
import { StyleSheet, Text, View, ART, Dimensions } from "react-native";
import * as d3shape from "d3-shape";

const { Surface, Group, Shape } = ART;
const ARTText = ART.Text;

const incomeValue = 300000;
const pieData = [
  { number: 40000, name: '趣味', color: '#F44336' },
  { number: 20000, name: '保険', color: '#E91E63' },
  { number: 20000, name: '交際費', color: '#9C27B0' },
  { number: 10000, name: '家賃', color: '#673AB7' },
  { number: 30000, name: '食費', color: '#3F51B5' },
  { number: 60000, name: '雑費', color: '#2196F3' },
];
const costValue = pieData.reduce((a, b) => a + b.number, 0);
const paymentValue = incomeValue - costValue;

type Props = {};
export default class App extends Component<Props> {
  render() {
    const arcs = d3shape.pie().value(item => item.number)(pieData);
    const pieCharts = arcs.map(arc => {
      const path = d3shape
        .arc()
        .outerRadius(90)
        .padAngle(0.05)
        .innerRadius(30)(arc);
      const points = d3shape
        .arc()
        .outerRadius(90)
        .innerRadius(30)
        .centroid(arc);
      const { name } = arc.data;
      const { color } = arc.data;
      return { path, points, name, color };
    });
    const width = 200;

    return (
      <View style={styles.moneyState}>
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
        <View style={styles.graph}>
          <Text style={styles.graphTitle}>現在の家計簿状況</Text>
          <View style={{ alignItems: "center" }}>
            <Surface width={width} height={width}>
                {pieCharts.map((item, index) => (
                  <Group x={width / 2} y={width / 2}>
                    <Shape
                      key={`pie_shape_${index}`}
                      fill={item.color}
                      stroke={item.color}
                      d={item.path}
                    />
                    <ARTText
                      font={`13px "Helvetica Neue", "Helvetica", Arial`}
                      fill="#fff"
                      alignment="center"
                      x={item.points[0]}
                      y={item.points[1]}
                    >
                      {item.name}
                    </ARTText>
                  </Group>
                ))}
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
