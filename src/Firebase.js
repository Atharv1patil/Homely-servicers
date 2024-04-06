// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5nx6F_1o7tbnr_DNuj-cA3rnvdrDBe50",
    authDomain: "homely-service.firebaseapp.com",
    projectId: "homely-service",
    storageBucket: "homely-service.appspot.com",
    messagingSenderId: "950476728803",
    appId: "1:950476728803:web:426289408c6c9b4ca418d6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const firestore = getFirestore(app);
