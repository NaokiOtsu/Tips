import React, { Component } from "react";
import { StyleSheet, Text, View, ART } from "react-native";
import * as d3shape from "d3-shape";
import * as d3 from "d3";

const { Surface, Group, Shape } = ART;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>最近のお金の流れ</Text>
          <Text style={styles.caution}>入出履歴タイムライン</Text>
        </View>
        <View style={styles.costWrapper}>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>食費</Text>
            <View style={styles.costGraph}>
              <Surface width={200} height={200}>
                <Group width={200} height={200}>
                  <Shape
                    fill="#12a828"
                    d="M0,0 L200,0 200,30 0,30"
                  />
                </Group>
              </Surface>
            </View>
            <Text style={styles.contValue}>36,444円 ></Text>
          </View>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>賃貸</Text>
            <View style={styles.costGraph}>
              <Surface width={200} height={200}>
                <Group width={200} height={200}>
                  <Shape
                    fill="#12a828"
                    d="M0,0 L200,0 200,30 0,30"
                  />
                </Group>
              </Surface>
            </View>
            <Text style={styles.contValue}>36,444円 ></Text>
          </View>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>娯楽</Text>
            <View style={styles.costGraph}>
              <Surface width={200} height={200}>
                <Group width={200} height={200}>
                  <Shape
                    fill="#12a828"
                    d="M0,0 L200,0 200,30 0,30"
                  />
                </Group>
              </Surface>
            </View>
            <Text style={styles.contValue}>36,444円 ></Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
    padding: 5,
    color: "#fff",
    backgroundColor: "#f00",
    fontSize: 12
  },

  costWrapper: {},
  costList: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  contTitle: {
    fontSize: 18,
    marginRight: 5
  },
  costGraph: {
    flex: 1,
    height: 30,
    marginRight: 5,
  },
  contValue: {
    textAlign: "center",
    fontSize: 20
  }
});
