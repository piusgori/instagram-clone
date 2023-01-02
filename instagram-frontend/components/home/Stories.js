import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Stories = () => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.textAlign}>
                <LinearGradient colors={['#C13584', '#F56040', '#DC3535']} style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.imageContainer}><Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003__480.jpg' }}></Image></View>
                    </View>
                </LinearGradient>
                <Text>Person A</Text>
        </View>
        <View style={styles.textAlign}>
                <LinearGradient colors={['#C13584', '#F56040', '#DC3535']} style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.imageContainer}><Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003__480.jpg' }}></Image></View>
                    </View>
                </LinearGradient>
                <Text>Person A</Text>
        </View>
        <View style={styles.textAlign}>
                <LinearGradient colors={['#C13584', '#F56040', '#DC3535']} style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.imageContainer}><Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003__480.jpg' }}></Image></View>
                    </View>
                </LinearGradient>
                <Text>Person A</Text>
        </View>
        <View style={styles.textAlign}>
                <LinearGradient colors={['#C13584', '#F56040', '#DC3535']} style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.imageContainer}><Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003__480.jpg' }}></Image></View>
                    </View>
                </LinearGradient>
                <Text>Person A</Text>
        </View>
        <View style={styles.textAlign}>
                <LinearGradient colors={['#C13584', '#F56040', '#DC3535']} style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.imageContainer}><Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003__480.jpg' }}></Image></View>
                    </View>
                </LinearGradient>
                <Text>Person A</Text>
        </View>
        <View style={styles.textAlign}>
                <LinearGradient colors={['#C13584', '#F56040', '#DC3535']} style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.imageContainer}><Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003__480.jpg' }}></Image></View>
                    </View>
                </LinearGradient>
                <Text>Person A</Text>
        </View>
        <View style={styles.textAlign}>
                <LinearGradient colors={['#C13584', '#F56040', '#DC3535']} style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.imageContainer}><Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003__480.jpg' }}></Image></View>
                    </View>
                </LinearGradient>
                <Text>Person A</Text>
        </View>
        </ScrollView>
    </View>
  )
}

export default Stories;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 12
    },
    innerContainer: {
        height: 75,
        width: 75,
        backgroundColor: 'white',
        borderRadius: 37.5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    outerContainer: {
        height: 80,
        width: 80,
        // backgroundColor: "purple",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
        marginBottom: 6
    },
    imageContainer: {
        height: 70,
        width: 70,
        borderRadius: 35,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    textAlign: {
        alignItems: "center",
        justifyContent: "center",
    }
});
