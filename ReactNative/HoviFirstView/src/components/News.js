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
    const sankeiUrl = 'https://www.sankeibiz.jp/rss/news/financials.xml';
    const moneyzineUrl = 'https://moneyzine.jp/rss/new/';
    // const results = await Promise.all([await fetch(sankeiUrl).text(), await fetch(moneyzineUrl).text()]);
    // console.log(111, results);
    const res = await fetch(moneyzineUrl);
    const rssText = await res.text()
    // console.log(222, rssText);
    const x2js = new X2JS();
    const json = x2js.xml2js(rssText)
    const news = json.rss.channel.item;
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
                  source={{ uri: 'https://placehold.jp/100x80.png?text=TouchLife' }}
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
                  source={{ uri: 'https://placehold.jp/150x80.png?text=TouchLife' }}
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
    justifyContent: 'space-between',
    marginTop: 10
  },
  newsList: {
    flex: 1,
    marginRight: 10,
  },
  newsImage: {
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
