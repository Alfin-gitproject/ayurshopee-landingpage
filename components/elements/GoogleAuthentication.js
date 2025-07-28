'use client'
import { useState } from 'react';
import { auth, googleProvider } from '../../firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { registerUser } from '@/services/auth/register';
import { createOrder } from '@/services/orders/order';
import transformUserDataToOrderSchema from '@/utils/transFormOrderData';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const GoogleAuthentication = ({ name, shippingInfo, Quantity, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");
    
    try {
      // Step 1: Authenticate with Firebase
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      console.log('Firebase authentication successful:', user);
      
      // Step 2: Prepare user data for YOUR backend
      const phoneNumber = user.phoneNumber || shippingInfo?.phone || '';
      const userData = {
        name: user.displayName || name,
        email: user.email,
        firebaseUid: user.uid, // Store Firebase UID for reference
        profilePicture: user.photoURL,
        emailVerified: user.emailVerified,
        provider: 'google'
      };

      // Only include phone if it's not empty
      if (phoneNumber && phoneNumber.trim()) {
        userData.phone = phoneNumber.trim();
      }

      console.log('Sending user data to backend:', userData);

      // Step 3: Register/Login with YOUR backend
      try {
        const backendResponse = await registerUser(userData);
        console.log('Backend registration successful:', backendResponse);
        
        if (backendResponse.user && backendResponse.user.id) {
          // Step 4: Create order if shipping info and quantity are provided
          if (shippingInfo && Quantity) {
            const orderData = transformUserDataToOrderSchema(shippingInfo, backendResponse.user.id, Quantity);
            const orderRes = await createOrder(orderData);
            
            if (orderRes._id) {
              Swal.fire({
                title: 'Order Success',
                text: 'Your order was successful!',
                icon: 'success',
                showCancelButton: true,
                confirmButtonText: 'Order Details',
                cancelButtonText: 'View Orders',
              }).then((result) => {
                if (result.isConfirmed) {
                  router.push(`/orders/${orderRes._id}`);
                } else {
                  router.push(`/orders`);
                }
              });
            }
          } else {
            // Just show success for registration without order
            Swal.fire({
              title: 'Success!',
              text: 'Google sign-in successful.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
          }
          closeModal();
        }
        
      } catch (backendError) {
        console.error('Backend registration failed:', backendError);
        
        // Sign out from Firebase if backend registration fails
        await auth.signOut();
        
        setError("Registration failed. Please try again.");
        Swal.fire({
          title: 'Registration Failed',
          text: 'There was an issue creating your account. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
      
    } catch (firebaseError) {
      console.error('Firebase authentication failed:', firebaseError);
      
      let errorMessage = "Failed to sign in with Google. Please try again.";
      
      if (firebaseError.code === 'auth/popup-closed-by-user') {
        errorMessage = "Sign-in was cancelled. Please try again.";
      } else if (firebaseError.code === 'auth/popup-blocked') {
        errorMessage = "Popup was blocked. Please allow popups and try again.";
      } else if (firebaseError.code === 'auth/unauthorized-domain') {
        errorMessage = "This domain is not authorized. Please contact support.";
      }
      
      setError(errorMessage);
      
      Swal.fire({
        title: 'Authentication Failed',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-2">
      <div style={{height:"fit-content"}} className='d-flex justify-content-end'>
        <button onClick={() => closeModal()}>
          <FontAwesomeIcon color='#000' icon={faX} />
        </button>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="text-center mb-4">
            <h4>Sign in with Google</h4>
            <p>Sign in securely using your Google account</p>
          </div>
          
          {error && (
            <div style={{ color: 'red', marginBottom: '10px' }}>
              <p>{error}</p>
            </div>
          )}
          
          <div className="d-grid mb-4">
            <button 
              className="btn btn-danger d-flex align-items-center justify-content-center" 
              onClick={handleGoogleSignIn} 
              disabled={isLoading}
              style={{
                backgroundColor: '#db4437',
                borderColor: '#db4437',
                padding: '12px 20px',
                fontSize: '16px'
              }}
            >
              {isLoading ? (
                <div style={{width:'2rem',height:'2rem'}} className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>
                  <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '10px' }} />
                  Sign in with Google
                </>
              )}
            </button>
          </div>
          
          <div className="text-center text-muted">
            <small>
              By signing in, you agree to our terms of service and privacy policy.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuthentication;
