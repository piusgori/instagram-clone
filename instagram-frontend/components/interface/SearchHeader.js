import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Ionicons name='search' size={20} style={styles.icon}></Ionicons>
        <TextInput placeholder='Search' style={styles.input}></TextInput>
      </View>
    </View>
  )
}

export default SearchHeader;

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12
    },
    icon: {
      padding: 10
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 0
    },
    section: {
      flex: 0.9,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
      borderRadius: 12,
    }
})