import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import  Ionicons from 'react-native-vector-icons/Ionicons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import TreesScreen from './screens/TreesScreen';
import AboutScreen  from './screens/AboutScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import TreesDetailsScreen from './screens/TreesDetailsScreen';

// Screens names
const homeName = 'Home';
const treesName = 'Trees';
const aboutName = 'About';
const favoritesName = 'Favorites';
const treeDetailsName = 'Details';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
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
    }}
    >
      <Tab.Screen name={homeName} component={HomeScreen}/>
      <Tab.Screen name={treesName} component={StackNavigator}/>
      <Tab.Screen name={aboutName} component={AboutScreen}/>
      <Tab.Screen name={favoritesName} component={FavoritesScreen}/>
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen name={treesName} component={TreesScreen} />
      <Stack.Screen name={treeDetailsName} component={TreesDetailsScreen} />
    </Stack.Navigator>
  )
}

export default function MainContainer() {
  return(
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};