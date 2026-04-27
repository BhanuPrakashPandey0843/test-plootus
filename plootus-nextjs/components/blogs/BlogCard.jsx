import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import styles from './BlogCard.module.css';

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blogs/${post.slug}`} className={styles.link}>
      <div className={styles.root}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <img src={post.image || '/placeholder.png'} alt={post.title} className={styles.image} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.date}>
            {post.date ? format(new Date(post.date), 'MMMM d, yyyy') : ''}
          </p>

          <h3 className={styles.title}>{post.title}</h3>

          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
