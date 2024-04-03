// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'zoomish-blog.firebaseapp.com',
    projectId: 'zoomish-blog',
    storageBucket: 'zoomish-blog.appspot.com',
    messagingSenderId: '45177378750',
    appId: '1:45177378750:web:8049926d651e63ce02cbef',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
