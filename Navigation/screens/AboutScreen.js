import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>AboutScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
  }
});
export default AboutScreen;