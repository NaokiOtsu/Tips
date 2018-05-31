import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.profile}>
        <Image
          source={require("../assets/img/profile.png")}
          style={styles.userIcon}
        />
        <Text style={styles.userName}>西之小虎</Text>
        <View style={styles.notification}>
          <Image
            source={require("../assets/img/envelope.png")}
            style={styles.notificationIcon}
          />
          <Text style={styles.notificationText}>お知らせ</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#fefefe",
    borderBottomColor: "#eee",
    borderBottomWidth: 1
  },
  userIcon: {
    width: 30,
    height: 30,
    marginRight: 5
  },
  userName: {
    flex: 1,
    color: "#333",
    fontSize: 16
  },
  notification: {
    alignItems: "center"
  },
  notificationIcon: {
    width: 25,
    height: 25
  },
  notificationText: {
    fontSize: 10
  }
});
