import styles from './PressHeader.module.css';

const PressHeader = () => {
  return (
    <div className={styles.root}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Plootus in the{' '}
            <span className={styles.highlightedText}>News</span>
          </h1>
          <p className={styles.description}>
            Stay up to date on Plootus in the media. From press features to
            industry highlights, explore how we&apos;re helping individuals make
            informed financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PressHeader;
