// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPSDF-J05wJVVd1Aso_4cOW6fUb7NQ4uU",
    authDomain: "voluenteers-network.firebaseapp.com",
    projectId: "voluenteers-network",
    storageBucket: "voluenteers-network.appspot.com",
    messagingSenderId: "941216592040",
    appId: "1:941216592040:web:4dfbb7a6cd4b870bc7d29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;