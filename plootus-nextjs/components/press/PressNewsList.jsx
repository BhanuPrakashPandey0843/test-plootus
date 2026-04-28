import { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchNews } from '../../lib/pressApi';
import styles from './PressNewsList.module.css';

const ITEMS_PER_PAGE = 10;

// ── Paginator ──────────────────────────────────────────────────
const Paginator = ({ totalPages, currentPage, onChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className={styles.paginationContainer}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`${styles.pageBtn} ${page === currentPage ? styles.active : ''}`}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

// ── Main Component ──────────────────────────────────────────────
const PressNewsList = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        // Sort newest first – matches monorepo behaviour
        const sorted = [...data].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setNewsData(sorted);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner} />
      </div>
    );
  }

  if (newsData.length === 0) return null;

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
  const currentItems = newsData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  return (
    <div className={styles.root}>
      {currentItems.map((item) => (
        <div key={item.id} className={styles.newsItem}>
          {/* Image */}
          <div className={styles.imageContainer}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className={styles.image}
            />
          </div>

          {/* Content */}
          <div className={styles.contentContainer}>
            <p className={styles.date}>
              {item.date ? moment(item.date).format('MMMM D, YYYY') : ''}
            </p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {item.link}
              </a>
            )}
          </div>
        </div>
      ))}

      <Paginator
        totalPages={totalPages}
        currentPage={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PressNewsList;
