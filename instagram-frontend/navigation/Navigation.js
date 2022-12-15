import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './HomeTab';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeAll'
                component={HomeTab}
                options={{
                    headerTitle: '',
                    headerLeft: () => {
                        return <Image style={styles.image} source={require('../assets/instagram-logo.png')}></Image>
                    },
                    headerRight: () => {
                        return <Text>Hello</Text>
                    }
                }}
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