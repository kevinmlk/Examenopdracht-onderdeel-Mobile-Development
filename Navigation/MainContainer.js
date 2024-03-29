import * as React from 'react';
// Import bottom navigation modules
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

// Create navigator variables
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab navigator function
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
      tabBarActiveTintColor: '#00FF7F',
          tabBarInactiveTintColor: '#F7F9F9',
          tabBarStyle: {
            backgroundColor: '#171A21',
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarTabStyle: {
            justifyContent: 'center',
          },
    })}
    >
      <Tab.Screen name={homeName} component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name={treesName} component={TreeStack} options={{ headerShown: false }} />
      <Tab.Screen
      name={aboutName}
      component={AboutScreen}
      options={{
        headerStyle: {
          backgroundColor: '#171A21',
        },
        headerTintColor: '#F7F9F9',
      }}
      />
      <Tab.Screen
      name={favoritesName}
      component={FavoritesScreen}
      options={{
        headerStyle: {
          backgroundColor: '#171A21',
        },
        headerTintColor: '#F7F9F9',
      }}
      />
    </Tab.Navigator>
  )
}

// Stack navigator for the trees and details screens
function TreeStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='TreeStack'
        component={TreesScreen}
        options={{
          title: 'All Trees',
          headerStyle: {
            backgroundColor: '#171A21', 
          },
          headerTintColor: '#F7F9F9',
        }}
      />
      <Stack.Screen
        name={treeDetailsName}
        component={TreesDetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#171A21',
          },
          headerTintColor: '#F7F9F9',
        }}
      />
    </Stack.Navigator>
  )
}

// Stack navigator for the trees on the home screen
function HomeStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Support Trees'
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#171A21',
          },
          headerTintColor: '#F7F9F9',
        }}
      />
      <Stack.Screen
      name={treeDetailsName}
      component={TreesDetailsScreen}
      options={{
        headerStyle: {
          backgroundColor: '#171A21',
        },
        headerTintColor: '#F7F9F9',
      }}
      />
    </Stack.Navigator>
  )
}

// Export bottom navigation
export default function MainContainer() {
  return(
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};