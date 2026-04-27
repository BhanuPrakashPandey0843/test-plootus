import styles from './NewsletterSection.module.css';
import NewsletterContent from './NewsletterContent';

/**
 * Pulls the content card up over the hero background band,
 * mirroring the monorepo's negative marginTop layout.
 */
const NewsletterSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <NewsletterContent />
    </div>
  );
};

export default NewsletterSection;
