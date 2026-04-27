import React from 'react';
import styles from './BlogHero.module.css';

const BlogHero = () => {
  return (
    <div className={styles.root}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Main Title Section */}
        <div className={styles.titleSection}>
          <h1 className={styles.title}>
            Stay Informed, <span className={styles.highlight}>Stay Empowered!</span>
          </h1>
          <p className={styles.subtitle}>
            Get weekly insights with our featured newsletter and explore a library of in-depth
            articles on smarter financial planning, retirement strategies, and wealth growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
