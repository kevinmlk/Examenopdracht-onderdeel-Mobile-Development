
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native';

const TreeArticle = props => {
  const [article, setArticle] = useState({});
  const getArticleData = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:32782/api/trees/";
      }
      else {
        url = "http://examenopdracht-support-trees.ddev.site/api/trees/";
      }
      url += props.articleId;
      const response = await fetch(url, {
        "method": "GET",
      });
      const json = await response.json();
      if (Platform.OS == 'android') {
        //ddev describe om port number te weten te komen
        json.headerImg = json.headerImg.replace("examenopdracht-support-trees.ddev.site", "10.0.2.2:32782");
      }
      setArticle(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: article.treeThumbnail
        }}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.body}>{article.treeArticle}</Text>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
  },
  wrapper: {
    padding: 24
  },
  title: {
    fontSize: 24,
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  body: {
    lineHeight: 24
  }
});
export default TreeArticle;