import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TreeTile = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.id)}>
      <View style={styles.tilesContainer}>
        <View style={styles.tilesRow}>
          <View style={styles.treeContainer}>
            <View style={styles.treeItem}>
              <Image
                style={styles.banner}
                source={{
                  uri: props.banner
                }}
              />
              <View style={styles.cardBody}>
                <Text style={styles.cardBadge}>{props.plantFamily}</Text>
                <Text style={styles.cardTitle}>{props.botanicalName}</Text>
                <Text style={styles.cardText}>{props.title}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  tilesContainer: {
  
  },
  tilesRow: {
    flex: 1,
  },
  treeContainer: {
    width: 160,
  },
  treeItem: {
    backgroundColor: 'rgba(247, 249, 249, .05)',
    borderRadius: 10,
    marginVertical: '2%',
  },
  banner: {
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 16,
  },
  cardBadge: {
    color: '#198754',
    marginBottom: 8,
  },
  cardTitle: {
    color: '#F7F9F9',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardText: {
    color: '#F7F9F9',
    fontSize: 14,
  },
});
export default TreeTile;