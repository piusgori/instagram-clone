import { Image, StyleSheet } from 'react-native'
import React from 'react'

const Left = () => {
  return (
    <Image style={styles.image} source={require('../../assets/instagram-logo.png')}></Image>
  )
}

export default Left;

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 40,
        marginLeft: 12
    }
})