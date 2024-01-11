import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.bodyText}>This is the favorites screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: '#171A21',
    height: '100%',
  },
  bodyText: {
    fontSize: 24,
    color: '#F7F9F9',
  },
});

export default FavoritesScreen;
