import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const IconImage = ({ image }) => {
  return (
    <TouchableOpacity>
        <Image style={styles.image} source={image}></Image>
    </TouchableOpacity>
  )
}

export default IconImage;

const styles = StyleSheet.create({
    image: {
        height: 25,
        width: 25,
        marginHorizontal: 12
    }
})