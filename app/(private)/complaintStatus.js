import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CarretLeft } from '../../components/icons'
import { router } from 'expo-router'
import CheckStatus from '../../components/checkStatus'
import { doc, getDoc } from 'firebase/firestore'
import { FIREBASE_DB } from '../../firebaseConfig'

export default function ComplaintStatus() {

    const [showStatus, setShowStatus] = useState(false);
    const [complaintId, setComplaintId] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [data, setData] = useState({});


    // Function to handle checking status
    async function checkStatus() {

        if (complaintId.length !== 5 || isNaN(complaintId)) {
            setError(true);
        }
        else {
            const document = await getDoc(doc(FIREBASE_DB, "complaints", complaintId));
            if (!document.exists) {
                setError(true)
                setErrorMessage("Please enter a valid complaint id")
                return
            }
            setData(document.data())
            setError(false);
            setShowStatus(true);
        }
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
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 500 }}>Check Complaint Status</Text>
            <Text style={{ marginTop: 30, color: "#6E6E6E", fontSize: 16, marginBottom: 10 }}>Complaint ID</Text>

            <TextInput placeholder='67485' style={[
                styles.input,
                error && styles.inputError // Apply red border if there's an error
            ]} onChangeText={(text) => {
                if (/^\d{0,5}$/.test(text)) {
                    setComplaintId(text);
                    setError(false);
                } else {
                    setError(true);
                }
            }}
                value={complaintId} keyboardType="numeric">
            </TextInput>
            {error && <Text style={{ color: 'red', marginTop: 5, paddingHorizontal: 2 }}>Please enter a 5-digit number</Text>}

            <TouchableOpacity activeOpacity={0.8} style={styles.yellowBar} onPress={() => checkStatus()}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 600, }}>Check Status</Text>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 1, width: "100%", borderColor: "#D2D2D2" }}></View>
            <View>
                {showStatus && <CheckStatus data={data} />}
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
    input: {
        height: 48,
        width: "100%",
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
    },
    inputError: {
        borderColor: 'red', // Border color for error state
    },
})