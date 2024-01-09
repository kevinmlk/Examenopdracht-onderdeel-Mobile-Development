import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

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
        <View style={styles.cardBody}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.intro}>{props.introText}</Text>
          {/* Tree list info */}
          <View style={styles.listGroup}>
            <Text style={styles.listGroupItem}>Botanical name: {props.botanicalName}</Text>
            <Text style={styles.listGroupItem}>Native area: {props.nativeAreas}</Text>
            <Text style={styles.listGroupItem}>Plant family: {props.plantFamily}</Text>
          </View>
          <Button
            title="Shop the tree"
            style={styles.buttonPrimary}
          />
        </View>
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  treeItem: {
    marginVertical: 16,
    backgroundColor: "rgba(247, 249, 249, .05)",
    borderRadius: 10,
  },
  banner: {
    height: 270,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    
  },
  title: {
    color: "#F7F9F9",
    fontSize: 24,
    marginTop: 16,
    marginBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  intro: {
    marginBottom: 16,
    color: "#F7F9F9",
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
    lineHeight: 24,
  },
  listGroup: {
    backgroundColor: "rgba(247, 249, 249, .05)",
    paddingTop: 8,
    paddingBottom: 8,
  },
  listGroupItem: {
    color: "#F7F9F9",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
  },
  buttonPrimary: {
    width: 50,
  },
});
export default TreeItem;