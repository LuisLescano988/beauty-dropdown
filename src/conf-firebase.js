// import { initializeApp } from "firebase/app";
// import { getFirestore } from '@firebase/firestore'

// const REACT_APP_APIKEY = process.env.REACT_APP_APIKEY
// const REACT_APP_AUTHDOMAIN = process.env.REACT_APP_AUTHDOMAIN
// const REACT_APP_PROJECTID = process.env.REACT_APP_PROJECTID
// const REACT_APP_STORAGEBUCKET = process.env.REACT_APP_STORAGEBUCKET
// const REACT_APP_MESSAGINGSENDERID = process.env.REACT_APP_MESSAGINGSENDERID
// const REACT_APP_APPID = process.env.REACT_APP_APPID
// const REACT_APP_MEASUREMENTID = process.env.REACT_APP_MEASUREMENTID

// const firebaseConfig = {
//     apiKey: "AIzaSyCg8Dzsg4dThep4vb6JRIQR5rvVAMuUNcM",
//     authDomain: "beauty-dropdown.firebaseapp.com",
//     projectId: "beauty-dropdown",
//     storageBucket: "beauty-dropdown.appspot.com",
//     messagingSenderId: "521448872895",
//     appId: "1:521448872895:web:92c2dfde5eaf34038c9f0a",
//     measurementId: "G-015SBLNG6B",
// };

// const app = initializeApp(firebaseConfig);
// export default db = getFirestore(app)

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCg8Dzsg4dThep4vb6JRIQR5rvVAMuUNcM",
    authDomain: "beauty-dropdown.firebaseapp.com",
    projectId: "beauty-dropdown",
    storageBucket: "beauty-dropdown.appspot.com",
    messagingSenderId: "521448872895",
    appId: "1:521448872895:web:92c2dfde5eaf34038c9f0a",
    measurementId: "G-015SBLNG6B",
});

const db = firebaseApp.firestore();
export default db;

// process.env.REACT_APP_APIKEY
// process.env.REACT_APP_AUTHDOMAIN
// process.env.REACT_APP_PROJECTID
// process.env.REACT_APP_STOREGEBUCKET
// process.env.REACT_APP_MESSAGINGSENDERID
// process.env.REACT_APP_APPID
// process.env.REACT_APP_MEASUREMENTID

// "AIzaSyCg8Dzsg4dThep4vb6JRIQR5rvVAMuUNcM"
// "beauty-dropdown.firebaseapp.com"
// "beauty-dropdown"
// "beauty-dropdown.appspot.com"
// "521448872895"
// "1:521448872895:web:92c2dfde5eaf34038c9f0a"
// "G-015SBLNG6B"