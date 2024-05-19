import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AdminLogin, ShieldIcon } from '../components/icons'
import { router } from 'expo-router'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
            if (user) {
                await AsyncStorage.setItem('role', 'admin');
                router.replace('/adminHome');
            }
        })

        return () => {
            unsubscribe
        }
    }, [])


    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            await AsyncStorage.setItem('role', 'admin');
            router.replace('/adminHome');
        } catch (error) {
            console.log(error);
            Alert.alert('LogIn failed: ' + error.message);
        }
    }
    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            await AsyncStorage.setItem('role', 'admin');
            router.replace('/adminHome');
        }
        catch (error) {
            console.log(error);
            Alert.alert('Sign Up failed: ' + error.message);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center', marginVertical: 30 }}>
                <Image style={{ height: 285, width: 285 }} source={require('../assets/images/public/logowithtext.png')} />
            </View>
            <View style={{ alignItems: 'center', marginBottom: 30 }}>
                <Text style={{ fontSize: 20 }}>Let's get started</Text>
            </View>
            <View style={{ gap: 20 }}>
                <View>
                    <Text style={{ fontSize: 16, color: "#6E6E6E", marginBottom: 10 }}>Email</Text>
                    <TextInput placeholder='Enter your Email' keyboardType='email-address' onChangeText={(text) => setEmail(text)}
                        value={email} style={{ backgroundColor: 'white', height: 48, elevation: 2, paddingHorizontal: 15 }}>
                    </TextInput>
                </View>
                <View>
                    <Text style={{ fontSize: 16, color: "#6E6E6E", marginBottom: 10 }}>Password</Text>
                    <TextInput placeholder='*************' secureTextEntry={true} onChangeText={(text) => setPassword(text)}
                        value={password} style={{ backgroundColor: 'white', height: 48, elevation: 2, paddingHorizontal: 15 }}>
                    </TextInput>
                </View>
            </View>
            <View style={{ gap: 10, flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <ShieldIcon />
                <Text style={{ flex: 1, color: "#828282", fontSize: 12, }}>By clicking "Continue", you agree to the Terms and Privacy Policy</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.signupBtn} activeOpacity={0.7} onPress={() => signup()}>
                    <Text style={{ fontSize: 16, fontWeight: 700, color: '#ffb831', textAlign: 'center' }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} activeOpacity={0.7} onPress={() => login()}>
                    <Text style={{ fontSize: 16, fontWeight: 700, color: 'white', textAlign: 'center' }}>Log In</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#F5F9FD"
    },
    loginBtn: {
        marginTop: 30,
        backgroundColor: '#ffb831',
        width: '45%',
        height: 48,
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 5,
    },
    signupBtn: {
        marginTop: 30,
        width: '45%',
        height: 48,
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 2,
        borderWidth: 1,
        borderColor: '#ffb831',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    digiBtn: {
        gap: 15, flexDirection: 'row',
        alignItems: 'center',
        elevation: 2, height: 64,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        marginBottom: 40
    }
})
