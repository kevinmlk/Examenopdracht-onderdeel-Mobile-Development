import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TreesScreen from './screens/TreesScreen';
import TreesDetailsScreen from './screens/TreesDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trees" component={TreesScreen} />
        <Stack.Screen name="Details" component={TreesDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}