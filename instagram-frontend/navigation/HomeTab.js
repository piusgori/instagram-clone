import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from '../screens/SearchScreen';
import ReelsScreen from '../screens/ReelsScreen';
import ShopScreen from '../screens/ShopScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen name='Home' component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color}></Ionicons> }}></BottomTab.Screen>
        <BottomTab.Screen name='Search' component={SearchScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name='search' size={size} color={color}></Ionicons> }}></BottomTab.Screen>
        <BottomTab.Screen name='Reels' component={ReelsScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name='videocam' size={size} color={color}></Ionicons> }}></BottomTab.Screen>
        <BottomTab.Screen name='Shop' component={ShopScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name='cart' size={size} color={color}></Ionicons> }}></BottomTab.Screen>
        <BottomTab.Screen name='Profile' component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name='person' size={size} color={color}></Ionicons> }}></BottomTab.Screen>
    </BottomTab.Navigator>
  )
}

export default HomeTab