import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

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
            <View style={styles.costGraph} />
            <Text style={styles.contValue}>36,444円 ></Text>
          </View>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>賃貸</Text>
            <View style={styles.costGraph} />
            <Text style={styles.contValue}>36,444円 ></Text>
          </View>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>娯楽</Text>
            <View style={styles.costGraph} />
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
    backgroundColor: "#e96900"
  },
  contValue: {
    textAlign: "center",
    fontSize: 20
  }
});
