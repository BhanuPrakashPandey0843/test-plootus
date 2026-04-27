import HubNav from '../HubNav/HubNav';
import PressHeader from './PressHeader';
import PressNewsList from './PressNewsList';
import PartnersSection from '../home/PartnersSection';
import styles from './PressPage.module.css';

/**
 * Full press listing page.
 * Composed from modular sub-components, mirroring the monorepo structure:
 *   PressPage → HubNav + PressHeader + PartnersSection + PressNewsList
 */
const PressPage = () => {
  return (
    <div className={styles.root}>
      <HubNav />
      <PressHeader />
      <PartnersSection titleDisabled={true} rootPadding="0" />
      <PressNewsList />
    </div>
  );
};

export default PressPage;
