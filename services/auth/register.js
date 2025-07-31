import axios from 'axios';

export const registerUser = async (userData, idToken) => {
  try {
    // Determine endpoint based on authentication provider
    let endpoint;
    if (userData.provider === 'google') {
      endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`;
    } else if (userData.googleId) {
      endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`;
    } else {
      endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/phone`;
    }

    console.log('Sending request to:', endpoint);
    console.log('User data:', userData);

    // Add Authorization header if idToken is provided
    const headers = {
      'Content-Type': 'application/json',
    };
    if (idToken) {
      headers['Authorization'] = `Bearer ${idToken}`;
    }

    const response = await axios.post(endpoint, userData, {
      withCredentials: true,
      headers,
    });

    console.log('Backend response:', response.data);
    return response.data;

  } catch (error) {
    console.error('Registration API error:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      throw new Error(error.response.data.message || `Server error: ${error.response.status}`);
    } else if (error.request) {
      console.error('No response received:', error.request);
      throw new Error('No response received from server. Please check your internet connection.');
    } else {
      console.error('Request setup error:', error.message);
      throw new Error(error.message || 'Error setting up request');
    }
  }
};