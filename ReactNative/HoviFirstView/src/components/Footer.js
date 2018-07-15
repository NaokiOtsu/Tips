import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Image
            source={require("../assets/img/home.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>マイページ</Text>
        </View>
        <View style={styles.list}>
          <Image
            source={require("../assets/img/note.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>家計簿</Text>
        </View>
        <View style={styles.list}>
          <Image
            source={require("../assets/img/pen.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>入力</Text>
        </View>
        <View style={styles.list}>
          <Image
            source={require("../assets/img/history.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>履歴</Text>
        </View>
        <View style={styles.list}>
          <Image
            source={require("../assets/img/other.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>その他</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff"
  },
  list: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 8
  },
  text: {
    fontSize: 10
  }
});
