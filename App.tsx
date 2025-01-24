import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsPage from './Screens/DetailsPage';
import DeliveryPage from './Screens/DeliveryPage'; 
import PaymentsPage from './Screens/PaymentsPage'; 

const Stack = createStackNavigator();
// use expo router to navigate between screens
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Delivery" component={DeliveryPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Payments" component={PaymentsPage} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}