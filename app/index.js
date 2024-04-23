import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AdminLogin, ShieldIcon } from '../components/icons'
import { router } from 'expo-router'

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center', marginVertical: 30 }}>
        <Image source={require('../assets/images/public/logowithtext.png')} />
      </View>
      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <Text style={{ fontSize: 20 }}>Let's get started</Text>
      </View>
      <TouchableOpacity style={styles.digiBtn} activeOpacity={0.7} onPress={() => router.navigate('/adminlogin')}>
        <AdminLogin />
        <Text style={{ fontSize: 16 }}>Continue with E-AADHAR</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
        <View style={{ borderBottomWidth: 1, width: "32%", borderColor: "#AAAAAA" }}></View>
        <Text style={{ color: "#AAAAAA" }}>or continue with</Text>
        <View style={{ borderBottomWidth: 1, width: "32%", borderColor: "#AAAAAA" }}></View>
      </View>
      <Text style={{ fontSize: 16, color: "#6E6E6E", marginBottom: 10 }}>Aadhar Number</Text>
      <TextInput placeholder='1234-5678-8765-4321'
        style={{ backgroundColor: 'white', height: 48, elevation: 2, paddingHorizontal: 15 }}>
      </TextInput>
      <View style={{ gap: 10, flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <ShieldIcon />
        <Text style={{ flex: 1, color: "#828282", fontSize: 12, }}>By clicking "Continue", you agree to the Terms and Privacy Policy</Text>
      </View>
      <TouchableOpacity style={styles.loginBtn} activeOpacity={0.7} onPress={() => router.navigate('/home')}>
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
