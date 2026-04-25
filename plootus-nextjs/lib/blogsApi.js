import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/';

const slugify = (text) => {
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
