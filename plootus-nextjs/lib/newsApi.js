import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/';

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}news/getAll`);
    return response.data?.news || [];
  } catch (err) {
    return [];
  }
};
