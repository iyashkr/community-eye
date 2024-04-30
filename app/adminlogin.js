import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AdminLogin, ShieldIcon } from '../components/icons'
import { router } from 'expo-router'
import { FIREBASE_AUTH } from '../firebaseConfig'

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;

    const login = async () => {
        try {
            const user = await auth.signInWithEmailAndPassword(email, password);
            console.log(user);
            router.navigate('adminhome');
        } catch (error) {
            console.log(error);
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
            <TouchableOpacity style={styles.loginBtn} activeOpacity={0.7} onPress={() => router.navigate('/adminHome')}>
                <Text style={{ fontSize: 16, fontWeight: 700, color: 'white', textAlign: 'center' }}>LogIn</Text>
            </TouchableOpacity>
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
        width: '50%',
        height: 48,
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 2
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
