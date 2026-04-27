import React from 'react';
import Link from 'next/link';
import moment from 'moment';
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
            {post.date ? moment(post.date).format('MMMM D, YYYY') : ''}
          </p>

          <h3 className={styles.title}>{post.title}</h3>

          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
