import styles from './NewsletterHeader.module.css';

const NewsletterHeader = () => {
  return (
    <div className={styles.root}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Stay Informed,{' '}
            <span className={styles.highlightedText}>Stay Empowered!</span>
          </h1>
          <p className={styles.description}>
            Get weekly insights with our featured newsletter and explore a library of in-depth
            articles on smarter financial planning, retirement strategies, and wealth growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterHeader;
