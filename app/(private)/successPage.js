import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CarretLeft } from '../../components/icons'
import { router } from 'expo-router'
import CheckStatus from '../../components/checkStatus'

export default function SuccessPage() {

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity activeOpacity={0.7} style={{ flex: 1, right: 12 }} onPress={() => router.push('/home')}>
                    <CarretLeft />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/images/public/pmalogo.png')}
                        style={{ height: 96, width: 96, alignSelf: 'center' }} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Body */}
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 30 }}>
                <Image style={{}} source={require('../../assets/images/public/bigGreenTick.png')} />
            </View>

            {/* Complaint ID container */}
            <View style={{ borderWidth: 1, borderStyle: 'dashed', borderColor: "#AAAAAA", padding: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 500, textAlign: 'center' }}>Your complaint has been registered successfully.</Text>
                <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 20, marginBottom: 5 }}>COMPLAINT ID</Text>
                <View style={{ backgroundColor: 'white', width: '40%', alignSelf: 'center', elevation: 2 }}>
                    <Text style={{ color: "#FCB226", fontSize: 32, textAlign: 'center' }}>76589</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.dashboardBtn} onPress={() => router.navigate('/home')}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 600, }}>Dashboard</Text>
            </TouchableOpacity>
            <Text style={{ textDecorationLine: 'underline', textAlign: 'center' }}>Check Complaint Status</Text>
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
    dashboardBtn: {
        borderRadius: 5,
        backgroundColor: "#4087d6",
        width: "100%", height: 48,
        alignSelf: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
})