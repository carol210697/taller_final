import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactListScreen from '../screens/ContactListScreen';
import AddContactScreen from '../screens/AddContactScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Añadir contacto">
        <Stack.Screen name="Contactos" component={ContactListScreen} />
        <Stack.Screen name="Añadir contacto" component={AddContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;