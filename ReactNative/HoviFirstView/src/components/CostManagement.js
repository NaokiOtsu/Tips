import React, { Component } from "react";
import { StyleSheet, Text, View, ART } from "react-native";

import {
  getMaxCurrentValue,
  getRatio,
} from '../helpers';

const { Surface, Group, Shape } = ART;
const ARTText = ART.Text;

function getBaseValue(currentValue) {
  const digit = currentValue.toString().length - 1; // 桁数
  let digitValue = 1;
  [...Array(digit)].forEach(() => digitValue *= 10);
  return Math.ceil(currentValue / digitValue) * digitValue;
}

type Props = {};
export default class App extends Component<Props> {
  constructor({ costs, beforeCosts }) {
    super();
    console.log(getRatio({ current: costs[0].value, before: beforeCosts[0].value }))
    this.state = {
      graphWidth: 0,
      graphHeight: 0,
    };
    this.maxCurrentValue = getMaxCurrentValue(costs);
  }

  onLayoutGraph = e => {
    this.setState({
      graphWidth: e.nativeEvent.layout.width,
      graphHeight: e.nativeEvent.layout.height,
    });
  }

  baseGraphD() {
    const w = this.state.graphWidth;
    const h = this.state.graphHeight;
    return `M0,14 L${w},14 ${w},${h} 0,${h}`;
  }

  beforeGraphD(cost) {
    const value = cost.value;
    const baseValue = getBaseValue(this.maxCurrentValue);
    const magnificate = this.state.graphWidth / 100;
    const w = value / baseValue * (100 * magnificate);
    const h = this.state.graphHeight;
    return `M0,14 L${w},14 ${w},${h} 0,${h}`;
  }

  currentGraphD(cost) {
    const currentValue = cost.value;
    const baseValue = getBaseValue(this.maxCurrentValue);
    const magnificate = this.state.graphWidth / 100;
    const w = currentValue / baseValue * (100 * magnificate);
    const h = this.state.graphHeight;
    return `M0,14 L${w},14 ${w},${h} 0,${h}`;
  }

  beforeTextX(cost) {
    const value = cost.value;
    const baseValue = getBaseValue(this.maxCurrentValue);
    const magnificate = this.state.graphWidth / 100;
    const x = value / baseValue * (100 * magnificate) - 5;
    return x;
  }

  costRatio(cost, beforeCost) {
    return getRatio({
      current: cost.value,
      before: beforeCost.value,
    });
  }

  render() {
    const costs = this.props.costs;
    const beforeCosts = this.props.beforeCosts;
    const beforeDate = this.props.beforeDate;

    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>支出管理について</Text>
          <Text style={styles.caution}>※本日時点昨年同日比</Text>
        </View>
        <View style={styles.costWrapper}>
          {costs.map((cost, index) => {
            return (
              <View style={styles.costList} key={index}>
                <Text style={styles.contTitle}>{cost.name}</Text>
                <View onLayout={this.onLayoutGraph} style={styles.costGraph}>
                  <Surface width={400} height={this.state.graphHeight}>
                    <Group>
                      <Shape
                        fill="#ffffff"
                        stroke="#dddddd"
                        d={this.baseGraphD()}
                      />
                      <ARTText
                        font={`10px "Helvetica Neue", "Helvetica", Arial`}
                        fill="#000000"
                        alignment="left"
                        x={this.beforeTextX(beforeCosts[index])}
                        y={0}
                      >
                        {`▼ ${beforeDate}`}
                      </ARTText>
                      <Shape
                        fill="#ffc493"
                        d={this.beforeGraphD(beforeCosts[index])}
                      />
                      <Shape
                        fill="#e96900"
                        d={this.currentGraphD(cost)}
                      />
                    </Group>
                  </Surface>
                </View>
                <View style={styles.costValueWrapper}>
                  <Text style={styles.costValue}>{cost.value.toLocaleString()}円</Text>
                  <Text style={[styles.costRatio, this.costRatio(cost, beforeCosts[index]) > 100 ? styles.costRatioFast : styles.costRatioSlow]}>
                    ({this.costRatio(cost, beforeCosts[index])}%{this.costRatio(cost, beforeCosts[index]) > 100 ? '早い' : '遅い'})
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },

  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  title: {
    fontSize: 24
  },
  caution: {
    color: "#f00",
    fontSize: 12
  },

  costWrapper: {},
  costList: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  contTitle: {
    width: 40,
    marginTop: 14,
    marginRight: 5,
    fontSize: 14,
    textAlign: 'right'
  },
  costGraph: {
    flex: 1,
    height: 40,
  },
  costValueWrapper: {
    marginTop: 16,
    marginLeft: 10,
  },
  costValue: {
    textAlign: "center"
  },
  costRatio: {
    textAlign: "center"
  },
  costRatioFast: {
    color: "#f00"
  },
  costRatioSlow: {
    color: "#00f"
  }
});
