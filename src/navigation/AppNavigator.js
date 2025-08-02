import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactListScreen from '../screens/ContactListScreen';
import AddContactScreen from '../screens/AddContactScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contactos">
        <Stack.Screen 
          name="Contactos" 
          component={ContactListScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button 
                title="+" 
                onPress={() => navigation.navigate('Añadir contacto')}
              />
            ),
          })}s
        />
        <Stack.Screen 
          name="Añadir contacto" 
          component={AddContactScreen}
          options={{ title: "Añadir nuevo contacto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;