// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE0CzbKEtlXLBJLulg0ykwB5pV0BCmGv8",
  authDomain: "alfin-98d0b.firebaseapp.com",
  projectId: "alfin-98d0b",
  storageBucket: "alfin-98d0b.firebasestorage.app",
  messagingSenderId: "602205872766",
  appId: "1:602205872766:web:2a8cc7325910790061ee2f",
  measurementId: "G-PK2LPMNKL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth (works on both client and server)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google Provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  import('firebase/analytics').then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}

export { auth, googleProvider, analytics };