import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Stories from '../components/home/Stories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stories></Stories>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
})