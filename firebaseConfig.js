import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAd4LODLJbk239C8EQyb0-zs0tcueJID8w",
    authDomain: "community-eye.firebaseapp.com",
    projectId: "community-eye",
    storageBucket: "community-eye.appspot.com",
    messagingSenderId: "519451634252",
    appId: "1:519451634252:web:9d3657599184bab501a2e9"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage)
});;