import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function CheckStatus() {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 30 }}>
                <Image source={require('../assets/images/public/complaintstatus.png')} />
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.reportBtn} onPress={() => router.navigate('/reportInsights')}>
                <Text style={[styles.reportText, { fontWeight: 600 }]} >See Report</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        marginTop: 30,
    },
    reportBtn: {
        backgroundColor: "#4087d6",
        width: "100%",
        height: 48,
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    reportText: {
        color: 'white',
        fontSize: 16,

    }
})