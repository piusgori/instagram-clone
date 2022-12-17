import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Right = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/icons/instagram-create.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/icons/instagram-unliked.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/icons/instagram-chats.png')}></Image>
        </TouchableOpacity>
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