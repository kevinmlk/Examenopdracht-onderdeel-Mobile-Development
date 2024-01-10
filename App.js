import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Text} from 'react-native';
import MainContainer from './Navigation/MainContainer';

function App() {
  return(
    <MainContainer />
  );
}

export default App;

// Import screens
// import HomeScreen from './screens/HomeScreen';
// import TreesScreen from './screens/TreesScreen';
// import TreesDetailsScreen from './screens/TreesDetailsScreen';
// import FavoritesScreen from './screens/FavoritesScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Trees" component={TreesScreen} />
//         <Stack.Screen name="Details" component={TreesDetailsScreen} />
//         <Stack.Screen name="Favorites" component={FavoritesScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }