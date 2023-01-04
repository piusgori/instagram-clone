import { Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react';

const ExploreImage = ({ image, isLarge }) => {
    const { width } = Dimensions.get('window');
    const imageWidth = (width / 3) -7;
    const largeHeight = (imageWidth * 2);

  return (
    <Image style={styles.image(imageWidth, isLarge ? largeHeight : imageWidth)} source={{ uri: image }}></Image>
  )
}

export default ExploreImage;

const styles = StyleSheet.create({
    image: (width, height) => ({
        width: width,
        height: height,
        margin: 3,
    })
})