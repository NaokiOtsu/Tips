import React, { Component } from "react";
import { StyleSheet, Text, View, ART } from "react-native";

const { Surface, Group, Shape } = ART;
const ARTText = ART.Text;

const costs = [
  {
    id: 1,
    name: '食費',
    currentValue: 89999,
    beforeName: '2016年10月',
    beforeValue: 35000,
  },
  {
    id: 2,
    name: '娯楽',
    currentValue: 60000,
    beforeName: '2016年10月',
    beforeValue: 70000,
  },
  {
    id: 3,
    name: '交通費',
    currentValue: 15000,
    beforeName: '2016年10月',
    beforeValue: 30000,
  },
];

function getMaxCurrentValue() {
  let result = 0;
  costs.reduce((a, b) => {
    if (a.currentValue < b.currentValue) {
      result = b.currentValue;
      return b;
    } else {
      result = a.currentValue;
      return a;
    }
  })
  return result;
}

function getBaseValue(currentValue) {
  const digit = currentValue.toString().length - 1; // 桁数
  let digitValue = 1;
  [...Array(digit)].forEach(() => digitValue *= 10);
  return Math.ceil(currentValue / digitValue) * digitValue;
}

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

  beforeGraphD(cost) {
    const beforeValue = cost.beforeValue;
    const maxCurrentValue = getMaxCurrentValue();
    const baseValue = getBaseValue(maxCurrentValue);
    const magnificate = this.state.graphWidth / 100;
    const w = beforeValue / baseValue * (100 * magnificate);
    const h = this.state.graphHeight;
    return `M0,14 L${w},14 ${w},${h} 0,${h}`;
  }

  currentGraphD(cost) {
    const currentValue = cost.currentValue;
    const maxCurrentValue = getMaxCurrentValue();
    const baseValue = getBaseValue(maxCurrentValue);
    const magnificate = this.state.graphWidth / 100;
    const w = currentValue / baseValue * (100 * magnificate);
    const h = this.state.graphHeight;
    return `M0,14 L${w},14 ${w},${h} 0,${h}`;
  }

  beforeTextX(cost) {
    const beforeValue = cost.beforeValue;
    const maxCurrentValue = getMaxCurrentValue();
    const baseValue = getBaseValue(maxCurrentValue);
    const magnificate = this.state.graphWidth / 100;
    const x = beforeValue / baseValue * (100 * magnificate) - 5;
    return x;
  }

  costRatio(cost) {
    const beforeValue = cost.beforeValue;
    const currentValue = cost.currentValue;
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
          {costs.map(cost => {
            return (
              <View style={styles.costList} key={cost.id.toString()}>
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
                        x={this.beforeTextX(cost)}
                        y={0}
                      >
                        ▼ 2016年10月
                      </ARTText>
                      <Shape
                        fill="#ffc493"
                        d={this.beforeGraphD(cost)}
                      />
                      <Shape
                        fill="#e96900"
                        d={this.currentGraphD(cost)}
                      />
                    </Group>
                  </Surface>
                </View>
                <View style={styles.costValueWrapper}>
                  <Text style={styles.costValue}>{cost.currentValue.toLocaleString()}円</Text>
                  <Text style={[styles.costRatio, this.costRatio(cost) > 0 ? styles.costRatioFast : styles.costRatioSlow]}>
                    ({this.costRatio(cost) > 0 ? '+' : ''}{this.costRatio(cost)}%{this.costRatio(cost) > 0 ? '早い' : '遅い'})
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
