import Axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.plootus.com/api/';

export const submitSupportContact = async ({ name, email, query }) => {
  try {
    const response = await Axios.post(
      `${BASE_URL}support/contact`,
      { name, email, query },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return { ok: response.status === 200, status: response.status };
  } catch (err) {
    const status = err?.response?.status ?? 500;
    return { ok: false, status };
  }
};
