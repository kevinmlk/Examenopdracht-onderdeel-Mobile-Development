import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import Components
import TreeTile from '../../components/TreeTile';

// Trees articles
const HomeScreen = () => {
  const navigation = useNavigation();

  const [articles, getArticles] = useState([]);

  const getTreesArticles = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        //ddev describe om port number te weten te komen
        url = "http://10.0.2.2:32771/api/trees/";
      }
      else {
        url = "http://examenopdracht-support-trees.ddev.site/api/trees/";
      }

      const response = await fetch(url, {
        "method": "GET",
      });
      const json = await response.json();
      getArticles(json.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTreesArticles();
  }, []);

  // Slice the data items
  const limitArticles = articles.slice(0, 4);

  // Header render
  const renderHeader = () => (
    // Tree header section
    <View style={styles.headerSection}>
      <Text style={styles.headerTitle}>Support What Supports You</Text>
      <Text style={styles.bodyText}>The goal is to grow millions of trees by supporting, your money goes directly towards planting trees, saving trees, and building greenhouses for trees.</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.treesContainer}>
        <FlatList
          data={limitArticles}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            if (Platform.OS == 'android') {
              item.treeThumbnail = item.treeThumbnail.replace('examenopdracht-support-trees.ddev.site', '10.0.2.2:32771')
            }
            return <TreeTile
              id={item.id}
              title={item.title}
              banner={item.treeThumbnail}
              botanicalName={item.botanicalName}
              nativeAreas={item.nativeAreas}
              treeHeight={item.treeHeight}
              treeWidth={item.treeWidth}
              plantFamily={item.plantFamily}
              introText={item.introText}
              fullText={item.articleText}
              treeLink={item.treeLink}
              navigation={navigation}
              onSelectArticle={(selectedId) => { navigation.navigate('Details', { id: selectedId }) }}
            />
          }}
          ListHeaderComponent={renderHeader}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#171A21",
  },
  headerSection: {
    marginBottom: 16,
    borderBottomWidth: .2,
    borderBottomColor: '#F7F9F9',
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    color: "#F7F9F9",
    fontWeight: "bold",
    marginBottom: 16,
  },
  bodyText: {
    color: '#F7F9F9',
  },
  treesContainer: {
    gap: 16,
    marginBottom: 32,
  }
});

export default HomeScreen;