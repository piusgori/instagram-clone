import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Stories from '../components/home/Stories';
import { Divider } from '@react-native-material/core';
import Post from '../components/home/Post';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Stories></Stories>
      <Divider style={{ marginBottom: 20 }}></Divider>
      <Post></Post>
      <Post></Post>
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
})