import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import AcademicScreen from './screens/AcademicScreen';
import ResourceScreen from './screens/ResourceScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import DetailsScreen from './screens/DetailsScreen';
import MapScreen from './screens/MapScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' }} />
        <Stack.Screen name="Academic" component={AcademicScreen} options={{ title: 'Academic' }} />
        <Stack.Screen name="Resources" component={ResourceScreen} options={{ title: 'Resources' }} />
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} options={{ title: 'Marketplace' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Campus Map' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
