// api.js
import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    // Determine endpoint based on authentication provider
    let endpoint;
    
    if (userData.provider === 'google') {
      endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`;
    } else if (userData.googleId) {
      // Legacy check for Google auth
      endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`;
    } else {
      // Phone or traditional auth
      endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/phone`;
    }
    
    console.log('Sending request to:', endpoint);
    console.log('User data:', userData);
    
    const response = await axios.post(endpoint, userData, {
      withCredentials: true, // Ensures cookies are sent with the request
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Backend response:', response.data);
    return response.data;
    
  } catch (error) {
    console.error('Registration API error:', error);
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      throw new Error(error.response.data.message || `Server error: ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
      throw new Error('No response received from server. Please check your internet connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request setup error:', error.message);
      throw new Error(error.message || 'Error setting up request');
    }
  }
};
