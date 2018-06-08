import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>あなたに似た人のニューストピック</Text>
        <View style={styles.newsWrapper}>
          <View style={styles.newsList}>
            <View style={styles.newsImage} />
            <Text style={styles.newsTitle}>長友がノーベル平和賞</Text>
          </View>
          <View style={styles.newsList}>
            <View style={styles.newsImage} />
            <Text style={styles.newsTitle}>長友がノーベル平和賞</Text>
          </View>
          <View style={styles.newsList}>
            <View style={styles.newsImage} />
            <Text style={styles.newsTitle}>長友がノーベル平和賞</Text>
          </View>
        </View>
        <View style={styles.newsWrapper}>
          <View style={styles.newsList}>
            <View style={styles.newsImage} />
            <Text style={styles.newsTitle}>長友がノーベル平和賞</Text>
          </View>
          <View style={styles.newsList}>
            <View style={styles.newsImage} />
            <Text style={styles.newsTitle}>長友がノーベル平和賞</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>更にニュースを表示する</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10
  },
  title: {
    fontSize: 22
  },
  newsWrapper: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10
  },
  newsList: {
    flex: 1,
    marginRight: 10
  },
  newsImage: {
    flex: 1,
    height: 80,
    marginBottom: 10,
    backgroundColor: "#eee"
  },
  newsTitle: {
    fontSize: 12
  },
  button: {
    marginTop: 20,
    padding: 20,
    overflow: "hidden",
    backgroundColor: "#ddd",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  buttonText: {
    textAlign: "center"
  }
});
