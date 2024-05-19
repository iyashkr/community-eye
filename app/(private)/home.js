import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadString } from "firebase/storage";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FIREBASE_DB } from '../../firebaseConfig';


export default function Home() {

    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [solvedCases, setSolvedCases] = useState(0);
    const paddedNumber = solvedCases.toString().padStart(8, '0');
    const digits = paddedNumber.split('');


    useEffect(() => {
        async function getCount() {
            const queryDoc = query(collection(FIREBASE_DB, "complaints"), where("status", "==", "solved"))
            const docSnapshot = await getDocs(queryDoc)
            const docLength = docSnapshot.size;
            setSolvedCases(docLength)
        }
        getCount()
    }, [])



    const pickImage = async () => {
        const hasPermission = await ImagePicker.getCameraPermissionsAsync();
        if (!hasPermission || !hasPermission.granted) {
            await ImagePicker.requestCameraPermissionsAsync();
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.4,
        });
        if (!result.canceled) {
            const uri = result.assets[0].uri
            const fileName = uri.split("/").pop();
            const { downloadUrl } = await uploadToFirebase(uri, fileName);
            router.push(
                {
                    pathname: '/complaintform',
                    params: {
                        image: downloadUrl
                    }
                }
            );
        }
    };

    const uploadToFirebase = async (uri, name, onProgress) => {
        const fetchResponse = await fetch(uri);
        const theBlob = await fetchResponse.blob();

        const imageRef = ref(getStorage(), `images/${name}`);

        const uploadTask = uploadBytesResumable(imageRef, theBlob);

        return new Promise((resolve, reject) => {
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress);
                    setUploading(true)
                    onProgress && onProgress(progress);
                },
                (error) => {
                    reject(error);
                },
                async () => {
                    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve({
                        downloadUrl,
                        metadata: uploadTask.snapshot.metadata,
                    });
                }
            );
        });
    };
    if (uploading) {
        return (
            <View style={{ position: "absolute", backgroundColor: "white", height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="blue" />
                <Text>Uploading {progress.toFixed(0)}%</Text>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={require('../../assets/images/public/pmalogo.png')}
                style={{ height: 96, width: 96, alignSelf: 'center' }}>
            </Image>
            <View>
                <View style={{ gap: 10, paddingHorizontal: 30, backgroundColor: "#428FE3", height: 120, borderRadius: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                        <Text style={{ fontWeight: 600 }}>Total Case Solved till Date ✅</Text>
                        <Text style={{ color: '#e30d0d', fontWeight: 700 }}>- LIVE</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {digits.map((digit, index) => (
                            <View key={index} style={styles.numbers}><Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>{digit}</Text></View>
                        ))}
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.yellowBar} onPress={() => router.navigate('/complaintStatus')}>
                    <Text style={{ fontSize: 16, color: 'white', textAlign: "center", fontWeight: 600, width: "100%" }}>Check Complaint Status</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Select your problem, because we've got the solution!</Text>
            <View style={{ marginVertical: 15, gap: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }}
                        activeOpacity={0.7} onPress={() => pickImage()}>
                        <Image source={require('../../assets/images/public/damagedRoads.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Damaged Roads</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.7} onPress={() => pickImage()}>
                        <Image source={require('../../assets/images/public/missingSignBoards.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Missing Sign Boards</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.7} onPress={() => pickImage()}>
                        <Image source={require('../../assets/images/public/accidentProneArea.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Accident Prone Area</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.7} onPress={() => pickImage()}>
                        <Image source={require('../../assets/images/public/infrastructure.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Infrastructure</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.7} onPress={() => pickImage()}>
                        <Image source={require('../../assets/images/public/accidentProneArea.png')} style={{ width: 160, height: 150 }} />
                        <View style={styles.categoryTextContainer}>
                            <Text style={[styles.categoryText, { fontWeight: 600 }]}>Accident Prone Area</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', elevation: 4, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.7} onPress={() => pickImage()}>
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
        height: 27, width: 27,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: "#428FE3"
    },
    yellowBar: {
        borderRadius: 5,
        backgroundColor: "#FCB226",
        width: "70%",
        height: 48,
        alignSelf: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 24
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