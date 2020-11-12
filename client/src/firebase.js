import firebase from 'firebase/app';
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJD8Cub1A3-nqq9dKH20Aom9slU-JA8K0",
    authDomain: "presupuestos-956d8.firebaseapp.com",
    databaseURL: "https://presupuestos-956d8.firebaseio.com",
    projectId: "presupuestos-956d8",
    storageBucket: "presupuestos-956d8.appspot.com",
    messagingSenderId: "111080916226",
    appId: "1:111080916226:web:4b12dafbd303f48436ee1b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth(); // -> authenticated user
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();