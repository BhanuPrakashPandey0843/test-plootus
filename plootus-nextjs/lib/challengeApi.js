import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://www.plootus.com/api/';

export async function registerChallengeParticipant(payload) {
  const url = `${BASE_URL}challenge/register`;
  const res = await axios.post(url, payload, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res.data;
}
