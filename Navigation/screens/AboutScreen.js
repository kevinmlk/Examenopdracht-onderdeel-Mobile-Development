import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.headerTitle}>Support Trees</Text>
      <Image
      style={styles.bannerImage}
      source={require('../../assets/about-banner.jpg')} />
      <Text style={styles.title}>Support Trees is more than just planting trees.</Text>
      <Text style={styles.bodyText}>
        Founded in 1972, the Arbor Day Foundation is the world’s largest member nonprofit dedicated to planting trees. Our strength is in network – a diverse group of individuals, municipalities, corporations, and planting organizations that enable us to plant trees around the world. We intentionally collaborate with partners who are deeply engaged in the areas they serve to plant the right trees in the right places to have the greatest impact. For more than 50 years, we’ve helped plant more than 500 million trees in neighborhoods and forests across more than 50 countries. And we’re just getting started.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#171A21",
  },
  headerTitle: {
    fontSize: 46,
    color: "#F7F9F9",
    fontWeight: "bold",
    textDecorationLine: 'underline',
    textDecorationColor: '#198754',
    marginBottom: 24,
  },
  bannerImage: {
    width: '100%',
    height: 220,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: "#F7F9F9",
    fontWeight: "bold",
    marginBottom: 16,
    lineHeight: 32,
  },
  bodyText: {
    color: '#F7F9F9',
    lineHeight: 24,
    paddingBottom: 32,
    fontSize: 14,
  },
});

export default AboutScreen;