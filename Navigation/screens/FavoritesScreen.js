import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native';

// Import Component
import TreeItem from '../../components/TreeItem';

// Trees articles
const FavoritesScreen = () => {


  useEffect(() => {
    getTreesArticles();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Catalogus</Text>
      <FlatList
        style={styles.list}
        data={articles}
        keyExtractor={item => item.id}//gebruik id als key voor de flatlist
        renderItem={({ item }) => {
          if (Platform.OS == 'android') {
            //ddev describe om port number te weten te komen
            item.treeThumbnail = item.treeThumbnail.replace('examenopdracht-support-trees.ddev.site', '10.0.2.2:32783')
          }
          return <TreeItem
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#171A21",
  },
  list: {
    height: "90%",
  },
  title: {
    fontSize: 24,
    color: "#F7F9F9",
    fontWeight: "bold",
    marginBottom: 8,
  }
});

export default FavoritesScreen;