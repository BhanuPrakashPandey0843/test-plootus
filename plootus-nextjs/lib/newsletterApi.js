import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/';

export const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const fetchNewsletters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}newsletter/getAll`);
    const newsletters = response.data?.newsletters || [];
    return newsletters.map((n) => ({
      id: n.id,
      slug: n.slug || slugify(n.heading) || String(n.id),
      heading: n.heading,
      description: n.description,
      image: n.imageUrl,
      date: n.date,
      source: n.source,
      headlines: n.headlines || [],
    }));
  } catch (err) {
    return [];
  }
};

export const fetchNewsletter = async (idOrSlug) => {
  try {
    // 1. Try numeric ID
    if (/^\d+$/.test(String(idOrSlug))) {
      const response = await axios.get(`${BASE_URL}newsletter/get`, { params: { id: idOrSlug } });
      return response.data?.newsletter || null;
    }

    // 2. Try fetching by slug directly
    try {
      const response = await axios.get(`${BASE_URL}newsletter/get`, { params: { slug: idOrSlug } });
      if (response.data?.newsletter) return response.data.newsletter;
    } catch (e) {
      // Ignore
    }

    // 3. Fallback: scan all newsletters
    const response = await axios.get(`${BASE_URL}newsletter/getAll`);
    const newsletters = response.data?.newsletters || [];
    const match = newsletters.find((n) => {
      const s = n.slug || slugify(n.heading);
      return s === idOrSlug;
    });

    if (match?.id) {
      const detailResponse = await axios.get(`${BASE_URL}newsletter/get`, { params: { id: match.id } });
      return detailResponse.data?.newsletter || null;
    }
    return null;
  } catch (err) {
    return null;
  }
};

export const subscribeNewsletter = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}newsletter/subscribe`, { email });
    return response.status.toString().startsWith('2');
  } catch (err) {
    return false;
  }
};
