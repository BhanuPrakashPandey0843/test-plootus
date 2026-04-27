import HubNav from '../HubNav/HubNav';
import NewsletterHeader from './NewsletterHeader';
import NewsletterContent from './NewsletterContent';
import styles from './NewsletterPage.module.css';

/**
 * Full newsletter listing page.
 * Composed from modular sub-components, mirroring the monorepo structure:
 *   NewsletterPage → HubNav + NewsletterHeader + NewsletterContent
 */
const NewsletterPage = () => {
  return (
    <div className={styles.root}>
      <HubNav />
      {/* Hero band */}
      <NewsletterHeader />
      {/* Card pulls up over the hero */}
      <div className={styles.inner}>
        <NewsletterContent />
      </div>
    </div>
  );
};

export default NewsletterPage;
