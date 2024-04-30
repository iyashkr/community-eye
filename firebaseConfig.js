// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd4LODLJbk239C8EQyb0-zs0tcueJID8w",
    authDomain: "community-eye.firebaseapp.com",
    projectId: "community-eye",
    storageBucket: "community-eye.appspot.com",
    messagingSenderId: "519451634252",
    appId: "1:519451634252:web:9d3657599184bab501a2e9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);