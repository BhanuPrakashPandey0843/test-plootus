import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { fetchNewsletters, subscribeNewsletter } from '../../lib/newsletterApi';
import PartnersSection from '../home/PartnersSection';
import styles from './NewsletterContent.module.css';

// ── helpers ────────────────────────────────────────────────────
const ITEMS_PER_PAGE = 5;

const formatDate = (dateString) => format(new Date(dateString), 'MMMM d, yyyy');

const renderHtml = (raw) => {
  if (!raw) return '';
  if (typeof raw === 'string' && /<[^>]+>/.test(raw)) return raw;
  return String(raw).replace(/\n/g, '<br />');
};

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

// ── Subscribe Modal ─────────────────────────────────────────────
const SubscribeModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setError('');
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Enter a valid email address');
      return;
    }
    setLoading(true);
    const ok = await subscribeNewsletter(trimmed);
    setLoading(false);
    if (ok) {
      setSuccess(true);
      setTimeout(onClose, 1800);
    } else {
      setError('Subscription failed. Please try again.');
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={() => !loading && onClose()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p className={styles.modalTitle}>Subscribe to Plootus Weekly</p>
        <input
          autoFocus
          type="email"
          placeholder="Email Address"
          className={`${styles.inputField} ${error ? styles.error : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        {error ? (
          <p className={styles.errorMsg}>{error}</p>
        ) : (
          <p className={styles.helperText}>We will send newsletters to this email</p>
        )}
        {success && <p style={{ color: '#10b981', marginTop: 8 }}>You are subscribed!</p>}
        <div className={styles.modalActions}>
          <button className={styles.cancelBtn} onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button className={styles.submitBtn} onClick={handleSubmit} disabled={loading}>
            {loading ? 'Subscribing…' : 'Subscribe'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Main Component ──────────────────────────────────────────────
const NewsletterContent = () => {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const items = await fetchNewsletters();
      setList(Array.isArray(items) ? items : []);
      setLoading(false);
    })();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
  const currentItems = list.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(list.length / ITEMS_PER_PAGE);

  return (
    <div className={styles.root}>
      {/* ── Header ── */}
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <div className={styles.titleSubtitleWrapper}>
            <span className={styles.cardTitle}>Plootus Weekly</span>
            <span className={styles.subtitle}>
              Your weekly dose of financial tips, strategies, and insights — delivered fresh every
              week! Subscribe now and never miss a tip!
            </span>
          </div>
          <button className={styles.subscribeButton} onClick={() => setSubscribeOpen(true)}>
            SUBSCRIBE
          </button>
        </div>
        <div className={styles.divider} />
      </div>

      {/* ── Partners strip ── */}
      <PartnersSection titleDisabled={true} rootPadding="24px 0" />
      <div className={styles.divider} />

      {/* ── Newsletter list ── */}
      <div className={styles.contentSection}>
        {loading ? (
          <div className={styles.loader}>
            <div className={styles.spinner} />
          </div>
        ) : (
          <div className={styles.newsletterList}>
            {currentItems.map((item, idx) => (
              <div key={item.id || idx} className={styles.newsletterItem}>
                <div className={styles.contentWrapper}>
                  {/* Image */}
                  <div className={styles.imageContainer}>
                    {item?.image && (
                      <img src={item.image} alt="Newsletter" className={styles.image} />
                    )}
                  </div>

                  {/* Text */}
                  <div className={styles.contentContainer}>
                    {item?.date && (
                      <p className={styles.date}>{formatDate(item.date)}</p>
                    )}

                    <h3 className={styles.storiesTitle}>
                      {item?.heading || 'Top Stories This Week'}
                    </h3>

                    {Array.isArray(item?.headlines) && item.headlines.length > 0 && (
                      <ul className={styles.headlinesList}>
                        {item.headlines.map((headline, i) => (
                          <li key={i} className={styles.headlineItem}>
                            {headline}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item?.description && (
                      <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: renderHtml(item.description) }}
                      />
                    )}

                    <div className={styles.itemFooter}>
                      <span className={styles.footerText}>Read more in this week&apos;s newsletter!</span>
                      <button
                        className={styles.readMore}
                        onClick={() => {
                          const id = item?.id;
                          if (id) router.push(`/newsletters/${item.slug || id}`);
                        }}
                      >
                        <span className={styles.readMoreText}>Read More</span>
                        <span className={styles.arrowIcon}>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Paginator
              totalPages={totalPages}
              currentPage={currentPage}
              onChange={handlePageChange}
            />
          </div>
        )}
      </div>

      {/* ── Subscribe modal ── */}
      {subscribeOpen && (
        <SubscribeModal
          onClose={() => {
            setSubscribeOpen(false);
          }}
        />
      )}

      {/* ── Success toast ── */}
      {successToast && (
        <div className={styles.toast}>You are subscribed to Plootus newsletter.</div>
      )}
    </div>
  );
};

export default NewsletterContent;
