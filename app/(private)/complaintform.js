import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AudioIcon, CarretLeft, MicIcon, ShieldIcon } from '../../components/icons';
import { router, useLocalSearchParams } from 'expo-router'; // Import the router
import * as Location from 'expo-location';
import { Audio } from 'expo-av';
import { doc, setDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function ComplaintForm() {
    const [uid, setUid] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [location, setLocation] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [recording, setRecording] = useState(null);
    const [errors, setErrors] = useState({});

    const [errorMessage, setErrorMessage] = useState(null);
    const params = useLocalSearchParams();


    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [complaint, setComplaint] = useState("");


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
            if (user) {
                setUid(user.uid)
            }
        });

        return unsubscribe;

    }, [])

    const generateComplaintId = () => {
        return Math.floor(10000 + Math.random() * 90000); // Generates a random number between 10000 and 99999
    };
    async function handleSubmit() {
        var newErrors = {};
        if (complaint.length < 50) {
            newErrors.complaint = "Please write complaint in more than 50 characters"
        }
        if (name.length < 3) {
            newErrors.name = "Please enter a valid name"
        }
        console.log(newErrors)
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        const docId = generateComplaintId();
        const document = {
            name: name,
            complaint: complaint,
            location: location,
            dateAdded: Date.now(),
            id: docId,
            uid: uid,
            status: "pending",
            image: image
        }
        try {
            await setDoc(doc(FIREBASE_DB, "complaints", `${document.id}`), document);
            router.push({ pathname: '/successPage', params: { id: document.id } });
            console.log("Document successfully created/updated");
        } catch (error) {
            console.error("Error creating/updating document:", error);
            // Handle the error appropriately, e.g., display a user-friendly message
        }
    };

    useEffect(() => {
        const urlParts = params.image.split('/images/');
        const modifiedUrl = `${urlParts[0]}/images%2F${urlParts[1]}`;
        setImage(modifiedUrl)
        fetchLocation();
    }, []);

    useEffect(() => {
        return () => {
            if (recording) {
                recording.stopAndUnloadAsync();
            }
        };
    }, [recording]);

    const startRecording = async () => {
        try {
            const { status } = await Audio.requestPermissionsAsync();
            if (status !== 'granted') {
                throw new Error('Permission to access microphone denied');
            }

            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
            setRecording(recording);
            setIsRecording(true);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const stopRecording = async () => {
        try {
            await recording.stopAndUnloadAsync();
            setIsRecording(false);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const deleteRecording = () => {
        if (recording) {
            recording.deleteAsync();
            setRecording(null);
        }
    };


    const fetchLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMessage('Location permission is required to record your location.');
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => router.back()} style={{ flex: 1, right: 12 }}>
                    <CarretLeft />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/images/public/pmalogo.png')}
                        style={{ height: 96, width: 96, alignSelf: 'center' }} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* body */}
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: '500' }}>Describe your Complaint</Text>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                {image ?
                    <Image source={{ uri: image }} style={{ height: 80, width: 45, backgroundColor: 'green' }} />
                    :
                    <View style={{ height: 80, width: 45, backgroundColor: 'green' }} />
                }
                <TextInput style={[styles.writeComplaint, errors?.complaint && styles.error]} onChangeText={text => setComplaint(text)} multiline={true}
                    numberOfLines={3} placeholder="Write your complaint" />
            </View>
            {errors.complaint && <Text style={{ color: "#AAAAAA", paddingLeft: 55, fontSize: 14 }}>{errors?.complaint}</Text>}
            <Text style={{ color: "#AAAAAA", textAlign: 'center', fontSize: 14 }}>or</Text>
            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
            {recording ? (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <AudioIcon />
                        <Text style={{}}>audiofile_20241223</Text>
                    </View>
                    <TouchableOpacity onPress={deleteRecording} style={{ backgroundColor: "#E30D0D33", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 }}>
                        <Text style={{ color: 'red' }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.yellowBar}
                    onPress={isRecording ? stopRecording : startRecording}
                >
                    <MicIcon />
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>
                        {isRecording ? 'Stop Recording' : 'Record Complaint'}
                    </Text>
                </TouchableOpacity>
            )}
            <View style={{ borderBottomWidth: 1, width: "100%", borderColor: "#D2D2D2" }}></View>

            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: '500', marginTop: 25 }}>Fill your Personal Details</Text>
            <View style={{ gap: 10, marginTop: 30 }}>
                <Text style={{ fontSize: 16, color: "#6E6E6E" }}>Name</Text>
                <TextInput onChangeText={text => setName(text)} placeholder='Enter your name'
                    style={[{ backgroundColor: 'white', height: 48, elevation: 2, paddingHorizontal: 15 }, errors?.name && styles.error]}>
                </TextInput>
            </View>
            {/* Location (conditionally displayed based on permission and error) */}
            {location && (
                <View style={{ gap: 10, marginTop: 20, marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, color: "#6E6E6E" }}>Location</Text>
                    <TextInput
                        placeholder='Your location'
                        value={location.coords.latitude + ', ' + location.coords.longitude} // Display retrieved coordinates
                        editable={false} // Prevent user from editing location
                        style={{ backgroundColor: 'white', height: 48, elevation: 2, paddingHorizontal: 15 }}
                    />
                </View>
            )}
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
        width: "60%", height: 48,
        alignSelf: 'center',
        paddingHorizontal: 10,
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
    error: {
        borderWidth: 1,
        borderColor: "red"
    }
});
