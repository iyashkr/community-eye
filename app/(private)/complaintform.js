import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { CarretLeft, MicIcon, ShieldIcon } from '../../components/icons';
import { router } from 'expo-router'; // Import the router

export default function ComplaintForm() {
    const handleSubmit = () => {
        // Handle submission here
        // For example, you can submit the form data to an API
        // After submission, navigate to successPage
        router.push('/successPage');
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => router.back()} style={{ flex: 1, right: 12 }}>
                    <CarretLeft />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/images/public/pmalogo.png')}
                        style={{ height: 96, width: 96, alignSelf: 'center' }} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* body */}
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: '500' }}>Describe your Complaint</Text>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/images/public/testImage.png')} />
                </View>
                <TextInput style={styles.writeComplaint} multiline={true}
                    numberOfLines={3} placeholder="Write your complaint" />
            </View>
            <Text style={{ color: "#AAAAAA", textAlign: 'center', fontSize: 14 }}>or</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.yellowBar} onPress={() => router.navigate('')}>
                <MicIcon />
                <Text style={{ fontSize: 16, color: 'white', fontWeight: '600', }}>Record Complaint</Text>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 1, width: "100%", borderColor: "#D2D2D2" }}></View>
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: '500', marginTop: 25 }}>Fill your Personal Details</Text>
            <View style={{ gap: 10, marginTop: 30 }}>
                <Text style={{ fontSize: 16, color: "#6E6E6E" }}>Name</Text>
                <TextInput placeholder='Enter your name'
                    style={{ backgroundColor: 'white', height: 48, elevation: 2, paddingHorizontal: 15 }}>
                </TextInput>
            </View>
            <View style={{ gap: 10, marginVertical: 15 }}>
                <Text style={{ fontSize: 16, color: "#6E6E6E" }}>Location</Text>
                <TextInput placeholder='Enter your location'
                    style={{ backgroundColor: 'white', height: 48, elevation: 2, paddingHorizontal: 15 }}>
                </TextInput>
            </View>
            <View style={{ gap: 10, flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <ShieldIcon />
                <Text style={{ flex: 1, color: "#828282", fontSize: 12, }}>By clicking "Continue", you agree to the Terms and Privacy Policy</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.dashboardBtn} onPress={handleSubmit}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: '600', }}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: 15,
        marginBottom: 30,
        flexDirection: 'row',
        gap: 8,
    },
    writeComplaint: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        height: 80,
        borderRadius: 5,
        position: "relative",
        backgroundColor: "white",
        padding: 10,
        textAlignVertical: 'top',
        flex: 3,
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
});
