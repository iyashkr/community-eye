import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CarretLeft, CommentIcon, LikeIcon, ProfileCheck, ShareIcon, } from '../../components/icons'
import { router } from 'expo-router'
import Post from '../../components/post'

export default function Community() {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity activeOpacity={0.7} style={{ flex: 1, right: -18, }} onPress={() => router.back()}>
                    <CarretLeft />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/images/public/pmalogo.png')}
                        style={{ height: 96, width: 96, alignSelf: 'center' }} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Body */}
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 500 }}>For People</Text>
            <View style={{ gap: 10, marginTop: 40 }}>
                <Post />
                <Post />
                <Post />
                <Post />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F9FD',
    },

})

