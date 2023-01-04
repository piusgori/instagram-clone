import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import ExploreImage from './ExploreImage';

const SearchGrid = () => {

  const image = 'https://cdn.pixabay.com/photo/2022/10/20/19/31/dog-7535633_960_720.jpg';

  return (
    <ScrollView style={styles.overallContainer}>
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          <ExploreImage image={image} isLarge={false}></ExploreImage>
          <ExploreImage image={image} isLarge={false}></ExploreImage>
          <ExploreImage image={image} isLarge={false}></ExploreImage>
          <ExploreImage image={image} isLarge={false}></ExploreImage>
        </View>
        <ExploreImage image={image} isLarge={true}></ExploreImage>
      </View>
      <View style={styles.container}>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
      </View>
      <View style={styles.container}>
        <ExploreImage image={image} isLarge={true}></ExploreImage>
        <View style={styles.flexContainer}>
          <ExploreImage image={image} isLarge={false}></ExploreImage>
          <ExploreImage image={image} isLarge={false}></ExploreImage>
          <ExploreImage image={image} isLarge={false}></ExploreImage>
          <ExploreImage image={image} isLarge={false}></ExploreImage>
        </View>
      </View>
      <View style={styles.container}>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
        <ExploreImage image={image} isLarge={false}></ExploreImage>
      </View>
    </ScrollView>
  )
}

export default SearchGrid;

const styles = StyleSheet.create({
  overallContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 2
  },

  image: (width, height) => ({
    width: width,
    height: height,
    margin: 3,
    flex: 1
  })
})