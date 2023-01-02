import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IconImage from '../interface/IconImage';

const Right = () => {
    const createIcon = require('../../assets/icons/instagram-create.png');
    const unlikedIcon = require('../../assets/icons/instagram-unliked.png');
    const chatsIcon = require('../../assets/icons/instagram-chats.png');

  return (
    <View style={styles.container}>
        <IconImage image={createIcon}></IconImage>
        <IconImage image={unlikedIcon}></IconImage>
        <IconImage image={chatsIcon}></IconImage>
    </View>
  )
}

export default Right;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
})