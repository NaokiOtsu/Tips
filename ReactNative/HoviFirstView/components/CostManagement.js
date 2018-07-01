import React, { Component } from "react";
import { StyleSheet, Text, View, ART } from "react-native";
const ARTText = ART.Text;
import * as d3shape from "d3-shape";
import * as d3 from "d3";

const { Surface, Group, Shape } = ART;

const costs = [
  {
    name: '食費',
    currentValue: 31444,
    beforeName: '2016年10月',
    beforeValue: 35000,
  }
];

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      graphWidth: 0,
      graphHeight: 0,
    };
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

  beforeGraphD() {
    const beforeValue = costs[0]['beforeValue'];
    const currentValue = costs[0]['currentValue'];
    const baseValue = Math.ceil(currentValue / 10000) * 10000;
    const magnificate = this.state.graphWidth / 100;
    const w = beforeValue / baseValue * (100 * magnificate);
    const h = this.state.graphHeight;
    return `M0,14 L${w},14 ${w},${h} 0,${h}`;
  }

  currentGraphD() {
    const currentValue = costs[0]['currentValue'];
    const digit = currentValue.toString().length - 1; // 桁数
    let digitValue = 1;
    [...Array(digit)].forEach(() => digitValue *= 10);
    const baseValue = Math.ceil(currentValue / digitValue) * digitValue;
    const magnificate = this.state.graphWidth / 100;
    const w = currentValue / baseValue * (100 * magnificate);
    const h = this.state.graphHeight;
    return `M0,14 L${w},14 ${w},${h} 0,${h}`;
  }

  beforeTextX() {
    const beforeValue = costs[0]['beforeValue'];
    const currentValue = costs[0]['currentValue'];
    const baseValue = Math.ceil(currentValue / 10000) * 10000;
    const magnificate = this.state.graphWidth / 100;
    const x = beforeValue / baseValue * (100 * magnificate) - 5;
    return x;
  }

  costRatio() {
    const beforeValue = costs[0]['beforeValue'];
    const currentValue = costs[0]['currentValue'];
    const ratio = currentValue / beforeValue * 100;
    return Math.round(ratio) - 100;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>支出管理について</Text>
          <Text style={styles.caution}>※本日時点昨年同日比</Text>
        </View>
        <View style={styles.costWrapper}>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>食費</Text>
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
                    x={this.beforeTextX()}
                    y={0}
                  >
                    ▼ 2016年10月
                  </ARTText>
                  <Shape
                    fill="#ffc493"
                    d={this.beforeGraphD()}
                  />
                  <Shape
                    fill="#e96900"
                    d={this.currentGraphD()}
                  />
                </Group>
              </Surface>
            </View>
            <View style={styles.costValueWrapper}>
              <Text style={styles.costValue}>{costs[0]['currentValue'].toLocaleString()}円</Text>
              <Text style={[styles.costRatio, this.costRatio() ? styles.costRatioSlow : styles.costRatioFast]}>
                ({this.costRatio() ? '' : '+'}{this.costRatio()}%{this.costRatio() ? '遅い' : '早い'})
              </Text>
            </View>
          </View>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>賃貸</Text>
            <View style={styles.costGraph}>
              <Surface width={320} height={320}>
                <Group>
                  <Shape
                    fill="#e96900"
                    d="M0,0 L50,0 50,30 0,30"
                  />
                </Group>
              </Surface>
            </View>
            <View style={styles.costValueWrapper}>
              <Text style={styles.costValue}>36,444円</Text>
              <Text style={styles.costRatio}>(+16%早い)</Text>
            </View>
          </View>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>娯楽</Text>
            <View style={styles.costGraph}>
              <Surface width={320} height={320}>
                <Group>
                  <Shape
                    fill="#e96900"
                    d="M0,0 L200,0 200,30 0,30"
                  />
                </Group>
              </Surface>
            </View>
            <View style={styles.costValueWrapper}>
              <Text style={styles.costValue}>36,444円</Text>
              <Text style={styles.costRatio}>(+16%早い)</Text>
            </View>
          </View>
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
    marginTop: 16,
    marginRight: 5,
    fontSize: 18,
  },
  costGraph: {
    flex: 1,
    height: 40,
    marginRight: 5,
  },
  costValueWrapper: {
    marginTop: 16
  },
  costValue: {
    textAlign: "center"
  },
  costRatio: {
    textAlign: "center"
  },
  costRatioFast: {
    color: "#00f"
  },
  costRatioSlow: {
    color: "#f00"
  }
});
