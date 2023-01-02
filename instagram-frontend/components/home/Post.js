import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import IconImage from '../interface/IconImage';
import TimeAgo from 'react-native-timeago';


const Post = () => {
    const imageUrl = 'https://cdn.pixabay.com/photo/2022/12/25/22/09/northern-lights-7677986__340.jpg'
    const [imageHeight, setImageHeight] = useState(0);
    const unbookmarkIcon = require('../../assets/icons/instagram-unbookmark.png');
    const unlikedIcon = require('../../assets/icons/instagram-unliked.png');
    const commentIcon = require('../../assets/icons/instagram-comment.png');
    const sendIcon = require('../../assets/icons/instagram-send.png');
    const date = '2023-01-02T14:54:56.370Z';

    useLayoutEffect(() => {
        Image.getSize(imageUrl, (width, height) => {
        setImageHeight(height);
    })
    }, []);


  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.ownerHeader}>
            <View style={styles.ownerImageContainer}><Image style={styles.ownerImage} source={{ uri: imageUrl }}></Image></View>
            <Text>dark_emeralds</Text>
        </View>
        <Feather name='more-vertical' size={20}></Feather>
      </View>
      <Image style={styles.image(imageHeight)} source={{ uri: imageUrl }}></Image>
      <View style={styles.iconsContainer}>
        <View style={styles.lcsContainer}>
            <IconImage image={unlikedIcon}></IconImage>
            <IconImage image={commentIcon}></IconImage>
            <IconImage image={sendIcon}></IconImage>
        </View>
        <IconImage image={unbookmarkIcon}></IconImage>
      </View>
        <Text style={styles.likeCountContainer}>3 Likes</Text>
        <View style={styles.captionContainer}>
            <Text style={styles.captionName}>dark_emeralds</Text>
            <Text>This is a beautiful scenery</Text>
        </View>
        <Text style={styles.commentCounter}>View all 5 comments</Text>
        <TimeAgo style={styles.timeText} time={date}></TimeAgo>
    </View>
  )
}

export default Post;

const styles = StyleSheet.create({
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12
    },
    captionName: {
        fontWeight: '600',
        marginRight: 6
    },
    commentCounter: {
        marginHorizontal: 12,
        color: 'grey'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 12
    },
    iconsContainer: {
        marginVertical: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    lcsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    image: (height) => ({
        width: '100%',
        height: height
    }),
    likeCountContainer: {
        marginHorizontal: 12,
        fontWeight:'600',
    },
    ownerHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ownerImage: {
        height: 30,
        width: 30
    },
    ownerImageContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        overflow: 'hidden',
        marginRight: 10
    },
    timeText: {
        margin: 12,
        color: 'grey'
    }
})