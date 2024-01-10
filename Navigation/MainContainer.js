import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicons from 'react-native-vector-icons/Ionicons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import TreesScreen from './screens/TreesScreen';
import AboutScreen  from './screens/AboutScreen';
import FavoritesScreen from './screens/FavoritesScreen';

// Screens names
const homeName = 'Home';
const treesName = 'Trees';
const aboutName = 'About';
const favoritesName = 'Favorites';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === treesName) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === aboutName) {
            iconName = focused ? 'book' : 'book-outline';
          } else if (rn === favoritesName) {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
      >
        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={treesName} component={TreesScreen}/>
        <Tab.Screen name={aboutName} component={AboutScreen}/>
        <Tab.Screen name={favoritesName} component={FavoritesScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};