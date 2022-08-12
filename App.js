import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllPlaces" component={AllPlaces} options={{title: "All Places"}} />
          <Stack.Screen name="AddPlace" component={AddPlace} options={{title: "Add Place"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
