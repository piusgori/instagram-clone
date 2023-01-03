import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from '../screens/SearchScreen';
import ReelsScreen from '../screens/ReelsScreen';
import ShopScreen from '../screens/ShopScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image, StyleSheet } from 'react-native';
import ProfileImage from '../components/interface/ProfileImage';
import Right from '../components/top/Right';
import Left from '../components/top/Left';

const BottomTab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <BottomTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <BottomTab.Screen name='Home' component={HomeScreen} options={{  headerRight: () => <Right></Right>, headerLeft: () => <Left></Left>, headerTitle: '', tabBarIcon: ({ color, size }) => <Image source={require('../assets/icons/instagram-home.png')} style={styles.image(size)}></Image> }}></BottomTab.Screen>
        <BottomTab.Screen name='Search' component={SearchScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name='search' size={size} color={color}></Ionicons> }}></BottomTab.Screen>
        <BottomTab.Screen name='Reels' component={ReelsScreen} options={{ tabBarIcon: ({ color, size }) => <Image source={require('../assets/icons/instagram-reels.png')} style={styles.image(size)}></Image> }}></BottomTab.Screen>
        <BottomTab.Screen name='Shop' component={ShopScreen} options={{ tabBarIcon: ({ color, size }) => <Image source={require('../assets/icons/instagram-shop.png')} style={styles.image(size)}></Image> }}></BottomTab.Screen>
        <BottomTab.Screen name='Profile' component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => <ProfileImage></ProfileImage> }}></BottomTab.Screen>
    </BottomTab.Navigator>
  )
}

export default HomeTab;

const styles = StyleSheet.create({
  image: (size) => ({
      width: size,
      height: size,
  }),
});