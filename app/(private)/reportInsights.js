import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CarretLeft } from '../../components/icons'
import { router, useLocalSearchParams } from 'expo-router'

export default function ReportInsights() {
    const params = useLocalSearchParams();
    const data = JSON.parse(params.data);
    const urlParts = data.image.split('/images/');
    const modifiedUrl = `${urlParts[0]}/images%2F${urlParts[1]}`;
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
                    <Text style={{ color: "#FFAB0D" }}>{data?.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <Text style={{ fontWeight: 500 }}>COMPLAINT NO : </Text>
                    <Text style={{ color: "#FFAB0D" }}>{data?.id}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 30 }}>
                <Text style={{ fontSize: 20 }}>Before</Text>
                {/* <View style={{ flexDirection: 'row', top: 42, zIndex: 5, marginTop: -25, gap: 100 }}>
                    <Text style={{ color: 'white' }}>Near Mangwal Hill</Text>
                    <Text style={{ color: 'white' }}>31 July</Text>
                </View> */}
                <Image source={{ uri: modifiedUrl }} style={{ borderRadius: 5, width: "100%", height: 360, objectFit: 'cover' }} />
            </View>

            {data?.status === "solved" ?
                <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 30 }}>
                    <Text style={{ fontSize: 20 }}>After</Text>
                    {/* <View style={{ flexDirection: 'row', top: 42, zIndex: 5, marginTop: -25, gap: 100 }}>
                        <Text style={{ color: 'white' }}>Near Mangwal Hill</Text>
                        <Text style={{ color: 'white' }}>31 July</Text>
                    </View> */}
                    <Image source={require('../../assets/images/public/after.png')} style={{ borderRadius: 5, width: "100%", height: 360, objectFit: 'cover' }} />
                </View>
                :
                <Image source={require('../../assets/images/public/complaintstatus.png')} style={{ marginBottom: 40 }} />
            }
        </ScrollView >
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