import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CarretLeft, ProfileCheck, } from '../../components/icons'
import { router } from 'expo-router'

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity activeOpacity={0.7} style={{ flex: 1, right: 12 }} onPress={() => router.back()}>
                    <CarretLeft />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/images/public/pmalogo.png')}
                        style={{ height: 96, width: 96, alignSelf: 'center' }} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Body */}
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 500 }}>Profile</Text>
            <View style={styles.profileBar}>
                <Image source={require('../../assets/images/public/testProfile.png')}
                    style={{ height: 56, width: 56, objectFit: 'contain', borderRadius: 100 }} />
                <View style={{ right: 20, backgroundColor: "white", borderRadius: 100, bottom: 20 }}>
                    <ProfileCheck />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: -5 }}>
                    <Text style={{ fontSize: 24, marginLeft: 10 }}>Yash Kumar</Text>
                    <Text style={{ fontSize: 12, color: "#6E6E6E", marginLeft: 10 }}>5347-9856-XXXX-XXXX</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 14 }}>Next stop, Level 15. Like a</Text>
                <Text style={{ color: "#FFBC3E", fontSize: 18, fontWeight: 500 }}>GUIDE</Text>
            </View>
            <View style={styles.progressBar}>
                <View style={[styles.progress, { width: `${65}%` }]} />
            </View>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "#4ECB71", fontSize: 14 }}>14,500 CP</Text>
                <Text style={{ fontSize: 14 }}>TO LEVEL 15</Text>
            </View>
            <View style={[styles.profileBar, { elevation: 2, justifyContent: 'space-evenly' }]}>
                <View style={{ justifyContent: 'center', alignItems: 'center', gap: 7 }}>
                    <Text style={{ color: "#FFBC3E", fontWeight: 500, fontSize: 26 }}>23</Text>
                    <Text>Complaints</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', gap: 7 }}>
                    <Text style={{ color: "#FFBC3E", fontWeight: 500, fontSize: 26 }}>106</Text>
                    <Text>Appreciations</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', gap: 7 }}>
                    <Text style={{ color: "#FFBC3E", fontWeight: 500, fontSize: 26 }}>34</Text>
                    <Text>Reviews</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        backgroundColor: '#F5F9FD',
    },
    profileBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40, elevation: 4,
        backgroundColor: 'white',
        borderRadius: 5,
        height: 110,
        marginHorizontal: 2,
    },
    progressBar: {
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden', // Ensure that progress bar doesn't overflow its container
        marginVertical: 10,
    },
    progress: {
        height: '100%',
        backgroundColor: '#4ECB71',
        borderRadius: 10,
    },
})

