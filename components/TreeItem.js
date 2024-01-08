import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TreeItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.id)}>
      <View style={styles.treeItem}>
        <Image
          style={styles.banner}
          source={{
            uri: props.banner
          }}
        />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.intro}>{props.introText}</Text>
        <Text style={styles.intro}>Botanical name: {props.botanicalName}</Text>
        <Text style={styles.intro}>Native area: {props.nativeAreas}</Text>
        <Text style={styles.intro}>Plant family: {props.plantFamily}</Text>
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  treeItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
  },
  banner: {
    height: 100
  },
  title: {
    fontWeight: "bold",
    color: "#D24335",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    textTransform: "uppercase"
  },
  intro: {
    marginBottom: 8
  }
});
export default TreeItem;