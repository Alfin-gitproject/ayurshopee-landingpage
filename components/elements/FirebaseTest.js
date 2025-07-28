'use client'
import { auth, googleProvider } from '../../firebase.config';
import { signInWithPopup } from 'firebase/auth';

const FirebaseTest = () => {
  const testFirebaseConnection = async () => {
    try {
      console.log('Firebase Auth:', auth);
      console.log('Google Provider:', googleProvider);
      console.log('Current User:', auth.currentUser);
      
      // Test auth state
      auth.onAuthStateChanged((user) => {
        console.log('Auth State Changed:', user);
      });
      
      alert('Firebase is properly initialized. Check console for details.');
    } catch (error) {
      console.error('Firebase test error:', error);
      alert('Firebase error: ' + error.message);
    }
  };

  const testGoogleSignIn = async () => {
    try {
      console.log('Starting Google Sign-In test...');
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google Sign-In Success:', result.user);
      alert('Google Sign-In successful! User: ' + result.user.email);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      alert('Google Sign-In error: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h3>Firebase Test Component</h3>
      <button onClick={testFirebaseConnection} style={{ margin: '10px', padding: '10px' }}>
        Test Firebase Connection
      </button>
      <button onClick={testGoogleSignIn} style={{ margin: '10px', padding: '10px' }}>
        Test Google Sign-In
      </button>
    </div>
  );
};

export default FirebaseTest;
