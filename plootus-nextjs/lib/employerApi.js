import axios from 'axios';

// The base URL for Plootus API. 
// In production this is usually https://www.plootus.com/api/
const API_BASE_URL = 'https://www.plootus.com/api/';

export const fetchEmployer403bData = async (employerName) => {
  try {
    // Matching the monorepo endpoint: public403b/data/:employerName
    const response = await axios.get(`${API_BASE_URL}public403b/data/${employerName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employer 403b data:', error);
    throw error;
  }
};
