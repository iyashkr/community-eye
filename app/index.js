import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AdminLogin, ShieldIcon } from '../components/icons'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const aadharData = [
    {
      id: 1,
      aadharNumber: '1234567887654321',
    },
    {
      id: 2,
      aadharNumber: '2345678976543210',
    },
    {
      id: 3,
      aadharNumber: '3456789065432109',
    },
    {
      id: 4,
      aadharNumber: '4567890154321098',
    },
    {
      id: 5,
      aadharNumber: '5678901243210987',
    },
    {
      id: 6,
      aadharNumber: '6789012332109876',
    },
    {
      id: 7,
      aadharNumber: '7890123421098765',
    },
    {
      id: 8,
      aadharNumber: '8901234510987654',
    },
    {
      id: 9,
      aadharNumber: '9012345609876543',
    },
    {
      id: 10,
      aadharNumber: '0123456798765432',
    }
  ];

  const [aadharNum, setAadharNum] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    const strippedText = aadharNum.replace(/-/g, '');
    const matchingAadhar = aadharData.find(item => item.aadharNumber === strippedText);
    if (matchingAadhar) {
      await AsyncStorage.setItem('role', 'user');
      router.replace('/home');
      console.log('Login successful');
      setError(false); // Reset error state
    } else if (strippedText.length === 16 && !matchingAadhar) {
      setError(true);
      setErrorMessage('Aadhar number not found');
    } else {
      setError(true);
      setErrorMessage('Aadhar must be 16 digits long');
    }
  };

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
        <Text style={{ fontSize: 16 }}>Admin Login Portal</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
        <View style={{ borderBottomWidth: 1, width: "32%", borderColor: "#AAAAAA" }}></View>
        <Text style={{ color: "#AAAAAA" }}>or continue with</Text>
        <View style={{ borderBottomWidth: 1, width: "32%", borderColor: "#AAAAAA" }}></View>
      </View>
      <Text style={{ fontSize: 16, color: "#6E6E6E", marginBottom: 10 }}>Aadhar Number</Text>
      <TextInput placeholder='1234-5678-8765-4321'
        style={[styles.input, error && styles.errorBorder]}
        value={aadharNum}
        onChangeText={setAadharNum} keyboardType="numeric" />

      {error && (
        <Text style={styles.errorText}>
          {errorMessage || 'Aadhar must be 16 digits long'}
        </Text>)}
      <View style={{ gap: 10, flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <ShieldIcon />
        <Text style={{ flex: 1, color: "#828282", fontSize: 12, }}>By clicking "Continue", you agree to the Terms and Privacy Policy</Text>
      </View>
      <TouchableOpacity style={styles.loginBtn} activeOpacity={0.7} onPress={handleLogin}>
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
    elevation: 2,
    borderRadius: 5,
  },
  digiBtn: {
    gap: 18, flexDirection: 'row',
    alignItems: 'center',
    elevation: 2, height: 64,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    marginBottom: 40
  },
  input: {
    backgroundColor: 'white',
    height: 48,
    elevation: 2,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
})
