import React, { Component } from "react";
import { StyleSheet, Text, View, ART, Dimensions } from "react-native";

type Props = {};
export default class App extends Component<Props> {
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
            <View style={styles.costGraph} />
            <View style={styles.contValueWrapper}>
              <Text style={styles.contValue}>36,444円</Text>
              <Text style={styles.contRatio}>(+16%早い)</Text>
            </View>
          </View>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>賃貸</Text>
            <View style={styles.costGraph} />
            <View style={styles.contValueWrapper}>
              <Text style={styles.contValue}>36,444円</Text>
              <Text style={styles.contRatio}>(+16%早い)</Text>
            </View>
          </View>
          <View style={styles.costList}>
            <Text style={styles.contTitle}>娯楽</Text>
            <View style={styles.costGraph} />
            <View style={styles.contValueWrapper}>
              <Text style={styles.contValue}>36,444円</Text>
              <Text style={styles.contRatio}>(+16%早い)</Text>
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
    fontSize: 18,
    marginRight: 5
  },
  costGraph: {
    flex: 1,
    height: 30,
    marginRight: 5,
    backgroundColor: "#4fc08d"
  },
  contValue: {
    textAlign: "center"
  },
  contRatio: {
    textAlign: "center"
  }
});
