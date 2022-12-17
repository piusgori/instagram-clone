import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Right = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/icons/instagram-create.png')}></Image>
      <Image style={styles.image} source={require('../../assets/icons/instagram-unliked.png')}></Image>
      <Image style={styles.image} source={require('../../assets/icons/instagram-chats.png')}></Image>
    </View>
  )
}

export default Right;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        height: 25,
        width: 25,
        marginHorizontal: 12
    }
})