import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://www.plootus.com/api/';

// Set withCredentials globally for all requests in this file
const axiosInstance = axios.create({
  withCredentials: true
});

/**
 * Sign in with email and password
 * @param {string} email 
 * @param {string} password 
 * @param {string} userType 'primary' | 'advisor'
 */
export const signIn = async (email, password, userType = 'primary') => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}user/signIn`, {
      email: email.trim(),
      password,
      userType
    });
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Sign in error:', error.response?.data || error.message);
    return { 
      error: error.response?.data?.message || 'Login failed', 
      status: error.response?.status || 500 
    };
  }
};

/**
 * Sign in with Google
 * @param {string} tokenId 
 */
export const googleLogin = async (tokenId) => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}user/google/oauth`, {
      access_token: tokenId
    });
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Google login error:', error.response?.data || error.message);
    return { 
      error: error.response?.data?.message || 'Google login failed', 
      status: error.response?.status || 500 
    };
  }
};

/**
 * Check if user exists and get their types
 * @param {string} email 
 */
export const getUserType = async (email) => {
  try {
    const response = await axiosInstance.get(`${BASE_URL}user/getUserType`, {
      params: { email: email.trim() }
    });
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Get user type error:', error.response?.data || error.message);
    return { 
      error: error.response?.data?.message || 'Failed to check user type', 
      status: error.response?.status || 500 
    };
  }
};

/**
 * Resend activation email
 * @param {string} email 
 */
export const resendActivationEmail = async (email) => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}user/resendEmail`, {
      email: email.trim()
    });
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Resend email error:', error.response?.data || error.message);
    return { 
      error: error.response?.data?.message || 'Failed to resend activation email', 
      status: error.response?.status || 500 
    };
  }
};
/**
 * Sign up a new user
 * @param {object} userData 
 */
export const signUp = async (userData) => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}user/signUp`, userData);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Sign up error:', error.response?.data || error.message);
    return { 
      error: error.response?.data?.message || 'Registration failed', 
      status: error.response?.status || 500 
    };
  }
};
