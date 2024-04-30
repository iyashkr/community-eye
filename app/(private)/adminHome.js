import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

export default function AdminHome() {
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../../assets/images/public/pmalogo.png')}
                style={{ height: 96, width: 96, alignSelf: 'center' }}>
            </Image>
            <View style={{ marginBottom: 50, paddingHorizontal: 10 }}>
                <View style={{ gap: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                        <Text style={{ fontWeight: 600 }}>Total Pending Case</Text>
                        <Text style={{ color: '#e30d0d', fontWeight: 700 }}>- LIVE</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                    </View>
                </View>
                <View style={{ gap: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                        <Text style={{ fontWeight: 600 }}>Total Case Solved till Date ✅</Text>
                        <Text style={{ color: '#e30d0d', fontWeight: 700 }}>- LIVE</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                        <View style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>0</Text></View>
                    </View>
                </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Select your problem, because we've got the solution!</Text>
            <View style={{ marginVertical: 15, gap: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }}
                        activeOpacity={0.7} onPress={() => router.navigate('/departmentCases')}>
                        <Image source={require('../../assets/images/public/damagedRoads.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Damaged Roads</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }}
                        activeOpacity={0.7} onPress={() => router.navigate('/departmentCases')}>
                        <Image source={require('../../assets/images/public/missingSignBoards.png')} style={{ width: 160, height: 150 }} onPress={() => router.navigate('/departmentCases')} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Missing Sign Boards</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.7} onPress={() => router.navigate('/departmentCases')}>
                        <Image source={require('../../assets/images/public/accidentProneArea.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Accident Prone Area</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.7} onPress={() => router.navigate('/departmentCases')}>
                        <Image source={require('../../assets/images/public/infrastructure.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Infrastructure</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.7} onPress={() => router.navigate('/departmentCases')}>
                        <Image source={require('../../assets/images/public/accidentProneArea.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Accident Prone Area</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.7} onPress={() => router.navigate('/departmentCases')}>
                        <Image source={require('../../assets/images/public/infrastructure.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Infrastructure</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 24,
        backgroundColor: "#F5F9FD"
    },
    numbers: {
        borderColor: '#2E7BCF',
        borderWidth: 2,
        height: 32, width: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: "#428FE3"
    },
    categoryTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4087d6',
        height: 31, width: "100%",
        borderRadius: 5
    },
    categoryText: {
        color: 'white',
        fontSize: 14,
    }
});