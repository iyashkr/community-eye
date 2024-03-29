import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function CheckStatus() {
    return (
        <View style={styles.container}>
            <Text>check Status</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.reportBtn} onPress={() => router.navigate('/successPage')}>
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
        width: "90%",
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