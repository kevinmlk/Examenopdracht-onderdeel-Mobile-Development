import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Favorites() {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (articleId) => {
    console.log(productId);
    let cpyFavoriteItems = [...favoriteItems];
    const index = cpyFavoriteItems.findIndex(item=>item.id === articleId);

    if (index === -1) {
      const getCurrentArticleItem = articles.find(item=>item.id === articleId);
      cpyFavoriteItems.push({
        id: articleId,
      });
    }

    setFavoriteItems(cpyFavoriteItems);
  }

  const deleteFavoriteHandler = (index) => {
    const tempFavorites = [...favorites];
    tempFavorites.splice(index, 1);
    setFavoriteItems(tempFavorites);
  };

  const renderItem = (itemData) => (
    <TaskItem
      taskId={itemData.index}
      taskname={itemData.item}
      onTaskDelete={deleteTaskHandler} />
  );

  return (
    <View style={styles.container}>
      {console.log(favorites)}
      <StatusBar style="auto" />
      <Text style={styles.heading}>To Do App</Text>
      <TaskInput onAddTask={addFavoriteHandler} />
      <FlatList data={favorites} renderItem={renderItem} />
    </View >
  )
}

const styles = StyleSheet.create({})