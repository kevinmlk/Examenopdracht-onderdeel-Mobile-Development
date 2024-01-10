import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// Import Trees article
import Article from '../../components/TreesArticle';

const TreesDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.screen}>
      <Article articleId={id} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#171A21",
  },
});
export default TreesDetailsScreen;