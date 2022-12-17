import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

const ProfileImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__340.jpg' }}></Image>
    </View>
  )
}

export default ProfileImage;

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    }
})