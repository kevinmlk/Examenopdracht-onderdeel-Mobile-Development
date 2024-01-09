
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, Button, Linking } from 'react-native';

// Tree link web browser linking
const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // If the URL scheme is "http" the web link should be opened
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} color='#198754' />;
};
const TreeArticle = props => {
  const [article, setArticle] = useState({});
  const getArticleData = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:32783/api/trees/";
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
        json.treeThumbnail = json.treeThumbnail.replace("examenopdracht-support-trees.ddev.site", "10.0.2.2:32783");
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
        <Text style={styles.intro}>{article.introText}</Text>
        <Text style={styles.subheader}>Additional Information</Text>
        <View style={styles.listGroup}>
          <Text style={styles.listGroupItem}><Text style={styles.strongText}>Botanical name: </Text>{article.botanicalName}</Text>
          <Text style={styles.listGroupItem}><Text style={styles.strongText}>Plant family: </Text>{article.plantFamily}</Text>
          <Text style={styles.listGroupItem}><Text style={styles.strongText}>Tree height: </Text>{article.treeHeight}</Text>
          <Text style={styles.listGroupItem}><Text style={styles.strongText}>Tree width: </Text>{article.treeWidth}</Text>
          <Text style={styles.listGroupItem}><Text style={styles.strongText}>Native area: </Text>{article.nativeAreas}</Text>
          <Text style={styles.listGroupItem}><Text style={styles.strongText}>Plant type: </Text>{article.plantType}</Text>
        </View>
        {/* Tree additional info */}
        <OpenURLButton url={props.treeLink}>Shop the tree</OpenURLButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 270,
  },
  wrapper: {
    padding: 24
  },
  title: {
    fontSize: 24,
    color: "#F7F9F9",
    marginBottom: 8,
  },
  intro: {
    color: '#F7F9F9',
    marginBottom: 16,
    lineHeight: 24,
  },
  subheader: {
    color: '#F7F9F9',
    fontSize: 20,
    marginBottom: 16,
  },
  listGroup: {
    backgroundColor: "rgba(247, 249, 249, .05)",
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 24,
    borderRadius: 5,
  },
  listGroupItem: {
    color: "#F7F9F9",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
  },
  strongText: {
    color: '#198754',
    fontWeight: '700',
  },
});
export default TreeArticle;