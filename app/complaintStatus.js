import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CarretLeft } from '../components/icons'
import { router } from 'expo-router'
import CheckStatus from '../components/checkStatus'

export default function ComplaintStatus() {

    const [showStatus, setShowStatus] = useState(false);

    // Function to handle checking status
    async function checkStatus() {
        setShowStatus(true);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, right: 12 }}>
                    <CarretLeft />
                </View>
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/images/public/pmalogo.png')}
                        style={{ height: 96, width: 96, alignSelf: 'center' }}></Image>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Body */}
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 500 }}>Check Complaint Status</Text>
            <Text style={{ marginTop: 30, color: "#6E6E6E", fontSize: 16, marginBottom: 10 }}>Complaint ID</Text>
            <TextInput placeholder='67485' style={{ height: 48, width: "100%", backgroundColor: 'white', paddingHorizontal: 15 }}>
            </TextInput>
            <TouchableOpacity activeOpacity={0.8} style={styles.yellowBar} onPress={() => checkStatus()}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 600, }}>Check Status</Text>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 1, width: "100%", borderColor: "#D2D2D2" }}></View>
            <View>
                {showStatus && <CheckStatus />}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#F5F9FD",
    },
    yellowBar: {
        borderRadius: 5,
        backgroundColor: "#FCB226",
        width: "55%", height: 48,
        alignSelf: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
})