import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchBlogs } from '../../lib/blogsApi';
import styles from './RecentPosts.module.css';

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const list = await fetchBlogs();
      const formatted = list.slice(0, 3).map((b) => ({
        id: b.id,
        slug: b.slug || b.id,
        date: b.date ? new Date(b.date).toLocaleDateString() : '',
        title: b.title || b.heading,
        excerpt:
          (b.excerpt || b.description || '').slice(0, 120) +
          ((b.excerpt || b.description || '').length > 120 ? '...' : ''),
        image: b.image || b.imageUrl || '/placeholder.png',
      }));
      setRecentPosts(formatted);
    };
    load();
  }, []);

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Similar Blogs</h3>
      {recentPosts.map((post) => (
        <Link href={`/blogs/${post.slug}`} key={post.id} className={styles.post}>
          <img src={post.image} alt={post.title} className={styles.postImage} />
          <div className={styles.postContent}>
            <p className={styles.postDate}>{post.date}</p>
            <h4 className={styles.postTitle}>{post.title}</h4>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentPosts;
