import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import X2JS from 'x2js'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      headerNews: [],
      bodyNews: []
    };
  }

  async componentDidMount() {
    const url = 'https://www.sankeibiz.jp/rss/news/financials.xml'
    const res = await fetch(url);
    const rssText = await res.text()
    const x2js = new X2JS();
    const json = x2js.xml2js(rssText)
    const news = json.rss.channel.item.filter(item => !!item.enclosure);
    this.setState({
      headerNews: news.slice(0, 3),
      bodyNews: news.slice(3, 5)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>あなたに似た人のニューストピック</Text>
        <View style={styles.newsWrapper}>
          {this.state.headerNews.map(news => {
            return (
              <View style={styles.newsList}>
                <Image
                  source={{ uri: news.enclosure._url }}
                  style={styles.newsImage}
                />
                <Text style={styles.newsTitle}>{news.title}</Text>
              </View>
            )
          })}
        </View>
        <View style={styles.newsWrapper}>
          {this.state.bodyNews.map(news => {
            return (
              <View style={styles.newsList}>
                <Image
                  source={{ uri: news.enclosure._url }}
                  style={styles.newsImage}
                />
                <Text style={styles.newsTitle}>{news.title}</Text>
              </View>
            )
          })}
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
    minHeight: 80,
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
