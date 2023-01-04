import { View, StyleSheet } from 'react-native'
import React from 'react'
import SearchHeader from '../components/search/SearchHeader'
import SearchGrid from '../components/search/SearchGrid'

const SearchScreen = () => {
  return (
    <View>
      <SearchHeader></SearchHeader>
      <View style={styles.space}></View>
      <SearchGrid></SearchGrid>
    </View>
  )
}

export default SearchScreen;

const styles = StyleSheet.create({
  space: {
    height: 12
  }
})