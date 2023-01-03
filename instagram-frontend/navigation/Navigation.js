import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './HomeTab';
import Left from '../components/top/Left';
import Right from '../components/top/Right';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeAll'
                component={HomeTab}
                options={{ headerShown: false }}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 40
    }
})