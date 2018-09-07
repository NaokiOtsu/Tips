import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    const costs = this.props.costs;

    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>最近のお金の流れ</Text>
          <Text style={styles.caution}>入出履歴タイムライン</Text>
        </View>
        <View style={styles.costWrapper}>
          {costs.map((cost, index) => {
            return (
              <View style={styles.costList} key={index}>
                <Text style={styles.contTitle}>{cost.name}</Text>
                <Text style={styles.costDate}>06.30</Text>
                <Text style={styles.contValue}>{cost.value.toLocaleString()}円 ></Text>
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

  costList: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  contTitle: {
    width: 60,
    marginRight: 5,
    fontSize: 18,
  },
  costDate: {
    flex: 1,
    marginRight: 5,
  },
  contValue: {
    textAlign: "center",
    fontSize: 20
  }
});
