import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadString } from "firebase/storage";


export default function Home() {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [9, 16],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            const image = result.assets[0].uri;
            const storage = getStorage();
            let filename = image.split('/').pop();
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;

            const metadata = {
                contentType: type
            };
            const storageRef = ref(storage, `images/${filename}`);


            const uploadTask = uploadBytesResumable(storageRef, image, metadata);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        router.push(
                            {
                                pathname: '/complaintform',
                                params: {
                                    image: downloadURL
                                }
                            }
                        );
                    });
                }
            );

        }
    };

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
                <TouchableOpacity activeOpacity={0.8} style={styles.yellowBar} onPress={() => router.navigate('/complaintStatus')}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 600, }}>Check Complaint Status</Text>
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
        width: "60%", height: 48,
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