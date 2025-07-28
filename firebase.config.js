// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqEM6A0JZyB3oJHlQgt1lN1spbkCx2W6Y",
  authDomain: "ayurshoppee-85dcb.firebaseapp.com",
  projectId: "ayurshoppee-85dcb",
  storageBucket: "ayurshoppee-85dcb.firebasestorage.app",
  messagingSenderId: "994673817242",
  appId: "1:994673817242:web:14a3a5946b27295fb2d123",
  measurementId: "G-TCC634JZE1"
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
