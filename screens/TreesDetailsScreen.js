import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TreesDetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Trees"
        onPress={() => navigation.navigate('Trees')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default TreesDetailsScreen;