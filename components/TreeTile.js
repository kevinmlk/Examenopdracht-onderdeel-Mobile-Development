import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TreeTile = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.id)} style={styles.treeItem}>
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  treeItem: {
    backgroundColor: 'rgba(247, 249, 249, .05)',
    borderRadius: 10,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    marginVertical: 8,
  },
  banner: {
    width: 140,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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