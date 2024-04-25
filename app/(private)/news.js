import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { CarretLeft, ProfileCheck, } from '../../components/icons'
import { router } from 'expo-router'

export default function News() {
    const options = ['All', 'Education', 'Politics', 'Health', 'Sports', 'Events', 'Religion'];

    const [selectedOption, setSelectedOption] = useState(0);

    const handleOptionPress = (index) => {
        setSelectedOption(index);
    };

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
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 500, marginBottom: 25 }}>Daily News Updates</Text>
            {/* Options */}
            <View style={styles.optionsContainer}>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.tabBar, selectedOption === index && styles.selectedOption]}
                        onPress={() => handleOptionPress(index)}>
                        <Text style={[selectedOption === index && styles.selectedOptionText]}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 400, marginTop: 50, marginBottom: 20 }}>Today</Text>
            <View style={{ gap: 10, }}>
                <TouchableOpacity activeOpacity={0.9} style={styles.newsBar} onPress={() => router.navigate('/readnews')}>
                    <Image style={{ height: 65, width: 65, objectFit: 'cover' }} source={require('../../assets/images/public/testImage.png')} />
                    <View style={{}}>
                        <Text style={{ fontWeight: 500 }}>Check latest laws implemented by Indora police for the public saftey.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', gap: 15 }}>
                                <View>
                                    <Text style={{ color: '#AAAAAA' }}>Indora</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#AAAAAA' }}>7:30pm</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: '#AAAAAA' }}>456</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
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
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 2,
        padding: 10,
        paddingHorizontal: 17,
        marginBottom: 1,
    },
    selectedOption: {
        backgroundColor: "#FCB226",
    },
    selectedOptionText: {
        color: 'white',
    },
    newsBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 47,
        marginBottom: 1,
        gap: 15
    },
})

