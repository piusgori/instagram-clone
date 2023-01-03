import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SearchHeader from '../components/interface/SearchHeader'
import SearchGrid from '../components/interface/SearchGrid'

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);
  const details = [
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
]
  return (
    <View>
      <SearchHeader></SearchHeader>
      <View style={styles.space}></View>
      <SearchGrid
        data={details}
        columns={3}
        loading={loading}
        onItemClick={(item) => {
          console.log('Got the Item:' + JSON.stringify(item));
        }}
        onEndReachedThreshold={400}
        onEndReached={() => {}}></SearchGrid>

    </View>
  )
}

export default SearchScreen;

const styles = StyleSheet.create({
  space: {
    height: 12
  }
})