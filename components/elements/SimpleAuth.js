'use client'
import { useState } from 'react';
import { auth } from '../../firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider } from '../../firebase.config';
import { registerUser } from '@/services/auth/register';
import { createOrder } from '@/services/orders/order';
import transformUserDataToOrderSchema from '@/utils/transFormOrderData';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const SimpleAuth = ({ name, shippingInfo, Quantity, closeModal, onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!userName.trim()) {
        newErrors.userName = 'Name is required';
      }
      if (!phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderCreation = async (userData) => {
    if (shippingInfo && Quantity) {
      try {
        const orderData = transformUserDataToOrderSchema({
          name: userData.name,
          email: userData.email,
          phone: userData.phone || shippingInfo?.phone || '',
          address: shippingInfo.address,
          selectedCity: shippingInfo.selectedCity,
          postalCode: shippingInfo.postalCode
        }, userData.email || userData.firebaseUid, Quantity);

        console.log('Creating order with data:', orderData);
        const orderResponse = await createOrder(orderData);
        console.log('Order created successfully:', orderResponse);

        await Swal.fire({
          title: 'Success!',
          text: `${isLogin ? 'Login' : 'Registration'} and order placement successful!`,
          icon: 'success',
          confirmButtonText: 'OK'
        });

        // Call onAuthSuccess callback to refresh header state
        if (onAuthSuccess) {
          onAuthSuccess();
        }

        closeModal();
        router.push('/order-success');
      } catch (orderError) {
        console.error('Order creation error:', orderError);
        await Swal.fire({
          title: 'Warning',
          text: `${isLogin ? 'Login' : 'Registration'} successful, but there was an issue creating your order. Please try again.`,
          icon: 'warning',
          confirmButtonText: 'OK'
        });
        closeModal();
      }
    } else {
      // For simple login/registration (no order), close modal immediately
      
      // Call onAuthSuccess callback to refresh header state
      if (onAuthSuccess) {
        onAuthSuccess();
      }
      
      closeModal();
      
      // Show brief success notification
      Swal.fire({
        title: 'Success!',
        text: `${isLogin ? 'Login' : 'Registration'} successful!`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
      });
    }
  };

  const handleManualAuth = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      let endpoint;
      let userData;

      if (isLogin) {
        // Manual Login
        endpoint = `/api/auth/login`;
        userData = {
          email: email,
          password: password
        };
      } else {
        // Manual Registration
        endpoint = `/api/auth/register`;
        userData = {
          name: userName,
          email: email,
          password: password,
          phone: phone,
          provider: 'manual'
        };
      }

      console.log('Sending request to:', endpoint);
      console.log('User data:', userData);

      const response = await axios.post(endpoint, userData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Backend response:', response.data);
      
      // Check if registration/login was successful
      if (response.data.success === false) {
        throw new Error(response.data.message || 'Authentication failed');
      }
      
      // Handle successful authentication
      const responseData = response.data;
      await handleOrderCreation({
        name: responseData.user?.name || userName,
        email: responseData.user?.email || email,
        phone: responseData.user?.phone || phone
      });

    } catch (error) {
      console.error('Authentication error:', error);
      let errorMessage = `${isLogin ? 'Login' : 'Registration'} failed. Please try again.`;
      
      if (error.response) {
        // Handle backend error responses
        if (error.response.data.success === false) {
          errorMessage = error.response.data.message || errorMessage;
        } else {
          errorMessage = error.response.data.message || `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        errorMessage = 'No response from server. Please check your internet connection.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      await Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      console.log('Firebase Google authentication successful:', user);
      
      const phoneNumber = user.phoneNumber || shippingInfo?.phone || '';
      const userData = {
        name: user.displayName || name,
        email: user.email,
        firebaseUid: user.uid,
        profilePicture: user.photoURL,
        emailVerified: user.emailVerified,
        provider: 'google'
      };

      if (phoneNumber && phoneNumber.trim()) {
        userData.phone = phoneNumber.trim();
      }

      console.log('Sending Google user data to backend:', userData);

      // Register Google user with your backend
      const backendResponse = await registerUser(userData);
      console.log('Backend registration successful:', backendResponse);

      await handleOrderCreation(userData);

    } catch (error) {
      console.error('Google authentication error:', error);
      await Swal.fire({
        title: 'Error',
        text: 'Google sign-in failed. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '500px', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ margin: 0, color: '#333', fontSize: '24px', fontWeight: 'normal' }}>
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <button 
          onClick={closeModal}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#999'
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>

      <form onSubmit={handleManualAuth}>
        {!isLogin && (
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                border: `1px solid ${errors.userName ? '#ff4444' : '#ddd'}`,
                borderRadius: '5px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: '#f9f9f9'
              }}
              placeholder="Full Name*"
            />
            {errors.userName && (
              <span style={{ color: '#ff4444', fontSize: '14px' }}>{errors.userName}</span>
            )}
          </div>
        )}

        <div style={{ marginBottom: '20px' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '15px',
              border: `1px solid ${errors.email ? '#ff4444' : '#ddd'}`,
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box',
              backgroundColor: '#f9f9f9'
            }}
            placeholder="Email*"
          />
          {errors.email && (
            <span style={{ color: '#ff4444', fontSize: '14px' }}>{errors.email}</span>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '15px',
              border: `1px solid ${errors.password ? '#ff4444' : '#ddd'}`,
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box',
              backgroundColor: '#f9f9f9'
            }}
            placeholder="Password*"
          />
          {errors.password && (
            <span style={{ color: '#ff4444', fontSize: '14px' }}>{errors.password}</span>
          )}
        </div>

        {!isLogin && (
          <div style={{ marginBottom: '25px' }}>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                border: `1px solid ${errors.phone ? '#ff4444' : '#ddd'}`,
                borderRadius: '5px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: '#f9f9f9'
              }}
              placeholder="Phone Number*"
            />
            {errors.phone && (
              <span style={{ color: '#ff4444', fontSize: '14px' }}>{errors.phone}</span>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: isLoading ? '#ccc' : '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            marginBottom: '20px'
          }}
        >
          {isLoading ? 'Please wait...' : (isLogin ? 'Login' : 'Register')}
        </button>
      </form>

      <div style={{ textAlign: 'center', margin: '20px 0', color: '#666', fontSize: '16px' }}>
        Or Login With
      </div>

      <button
        onClick={handleGoogleSignIn}
        disabled={isGoogleLoading}
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: isGoogleLoading ? 'not-allowed' : 'pointer',
          marginBottom: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        {isGoogleLoading ? 'Please wait...' : (
          <>
            <span style={{ fontSize: '18px' }}>G</span>
            Google
          </>
        )}
      </button>

      <div style={{ textAlign: 'center' }}>
        <span style={{ color: '#666' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
        </span>
        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setErrors({});
            setPassword('');
            setUserName('');
            setPhone('');
          }}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            backgroundColor: '#e74c3c',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          {isLogin ? 'Register Now' : 'Login Now'}
        </button>
      </div>
    </div>
  );
};

export default SimpleAuth;
