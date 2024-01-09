import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// Import Trees article
import Article from '../components/TreesArticle';

const TreesDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.screen}>
      <Article articleId={id} />
      <Button
        title="back to Trees"
        onPress={() => navigation.navigate('Trees')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F8F6F6",
  }
});
export default TreesDetailsScreen;