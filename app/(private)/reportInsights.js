import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CarretLeft } from '../../components/icons'
import { router } from 'expo-router'

export default function ReportInsights() {
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
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 500 }}>Report Insights</Text>
            <View style={{ marginVertical: 30, gap: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <Text style={{ fontWeight: 500 }}>COMPLAINT REGISTERED BY : </Text>
                    <Text style={{ color: "#FFAB0D" }}>Yash Kumar</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <Text style={{ fontWeight: 500 }}>COMPLAINT NO : </Text>
                    <Text style={{ color: "#FFAB0D" }}>435439</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 30 }}>
                <Text style={{ fontSize: 20 }}>Before</Text>
                <Image source={require('../../assets/images/public/before.png')} style={{ borderRadius: 5 }} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 30 }}>
                <Text style={{ fontSize: 20 }}>After</Text>
                <Image source={require('../../assets/images/public/before.png')} style={{ borderRadius: 5 }} />
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
})