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

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}blog/getAll`);
    const blogs = response.data?.blogs || [];
    return blogs.map((b) => ({
      id: b.id,
      slug: b.slug || slugify(b.heading) || String(b.id ?? ''),
      title: b.heading,
      excerpt: b.description,
      image: b.imageUrl,
      date: b.date,
      link: b.link || null,
    }));
  } catch (err) {
    return [];
  }
};

export const fetchBlog = async (idOrSlug) => {
  try {
    // 1. Try numeric ID
    if (/^\d+$/.test(String(idOrSlug))) {
      const response = await axios.get(`${BASE_URL}blog/get`, { params: { id: idOrSlug } });
      return response.data?.blog || null;
    }

    // 2. Try fetching by slug directly
    try {
      const response = await axios.get(`${BASE_URL}blog/get`, { params: { slug: idOrSlug } });
      const blog = response.data?.blog || null;
      if (blog) return blog;
    } catch (e) {
      // Ignore and proceed to fallback
    }

    // 3. Fallback: Fetch all and find by slug
    const response = await axios.get(`${BASE_URL}blog/getAll`);
    const blogs = response.data?.blogs || [];
    const match = blogs.find((b) => {
      const s = b.slug || slugify(b.heading);
      return s === idOrSlug;
    });

    if (match?.id) {
      const detailResponse = await axios.get(`${BASE_URL}blog/get`, { params: { id: match.id } });
      return detailResponse.data?.blog || null;
    }
    return null;
  } catch (err) {
    return null;
  }
};

export const fetchWordpressPostByLink = async (link) => {
  try {
    const response = await axios.get('https://www.plootus.com/blog/?rest_route=/wp/v2/posts&per_page=100');
    const data = response.data || [];
    const match = data.find((p) => p?.link === link);
    if (!match) return null;
    return {
      title: match?.title?.rendered,
      content: match?.content?.rendered,
      date: match?.date,
      image: null,
    };
  } catch (err) {
    return null;
  }
};
