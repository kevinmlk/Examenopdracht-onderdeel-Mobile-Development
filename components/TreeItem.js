import React, {useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Linking } from 'react-native';

// Tree link web browser linking
const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // If the URL scheme is "http" the web link should be opened
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} color='#198754' />;
};

const TreeItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.id)}>
      <View style={styles.treeContainer}>
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
              <Text style={styles.listGroupItem}><Text style={styles.strongText}>Botanical name: </Text>{props.botanicalName}</Text>
              <Text style={styles.listGroupItem}><Text style={styles.strongText}>Native area: </Text>{props.nativeAreas}</Text>
              <Text style={styles.listGroupItem}><Text style={styles.strongText}>Plant family: </Text>{props.plantFamily}</Text>
            </View>
          </View>
        </View>
        <OpenURLButton url={props.treeLink}>Shop the tree</OpenURLButton>
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  treeContainer: {
    marginVertical: 24,
  },
  treeItem: {
    backgroundColor: 'rgba(247, 249, 249, .05)',
    borderRadius: 10,
    marginBottom: 24,
    paddingBottom: 16,
  },
  banner: {
    height: 270,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: '#F7F9F9',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  intro: {
    marginBottom: 16,
    color: '#F7F9F9',
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
    lineHeight: 24,
  },
  listGroup: {
    backgroundColor: 'rgba(247, 249, 249, .05)',
    borderTopWidth: .2,
    borderTopColor: '#F7F9F9',
  },
  listGroupItem: {
    color: '#F7F9F9',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomWidth: .2,
    borderBottomColor: '#F7F9F9',
  },
  strongText: {
    color: '#198754',
    fontWeight: '700',
  },
});
export default TreeItem;