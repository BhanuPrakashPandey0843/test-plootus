import { useEffect, useState } from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import { fetchNewsletter, fetchNewsletters } from '../../lib/newsletterApi';
import styles from './NewsletterDetails.module.css';

// ── helpers ────────────────────────────────────────────────────
const renderHtml = (item) => {
  const raw =
    item?.content ||
    item?.contentHtml ||
    item?.html ||
    item?.htmlData ||
    '';
  if (typeof raw === 'string' && /<[^>]+>/.test(raw)) return raw;
  if (raw) return String(raw).replace(/\n/g, '<br />');
  return item?.description || '';
};

// ── Component ──────────────────────────────────────────────────
/**
 * NewsletterDetails
 * Accepts `slug` as a prop (passed from the Next.js page via getServerSideProps
 * or directly as a prop when rendered on the client).
 */
const NewsletterDetails = ({ slug }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const load = async () => {
      try {
        let data = await fetchNewsletter(slug);
        if (!data) {
          const list = await fetchNewsletters();
          data =
            list.find(
              (n) =>
                String(n.slug) === String(slug) ||
                String(n.id) === String(slug)
            ) || null;
        }
        setItem(data);
      } catch (err) {
        setError('Failed to load newsletter');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  const pageTitle = item?.heading
    ? `${item.heading} - Plootus Newsletters`
    : 'Newsletter - Plootus';
  const pageDesc =
    item?.description ||
    'Read this insightful newsletter from Plootus about financial planning and retirement.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link
          rel="canonical"
          href={`https://www.plootus.com/newsletters/${slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        {(item?.imageUrl || item?.image) && (
          <meta property="og:image" content={item.imageUrl || item.image} />
        )}
        {item?.date && (
          <meta property="article:published_time" content={item.date} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: item?.heading || '',
              description: item?.description || '',
              image: item?.imageUrl || item?.image || '',
              datePublished: item?.date,
              author: { '@type': 'Organization', name: 'Plootus' },
              publisher: {
                '@type': 'Organization',
                name: 'Plootus',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.plootus.com/logo.png',
                },
              },
            }),
          }}
        />
      </Head>

      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <div className={styles.spinner} />
          </div>
        ) : error ? (
          <p className={styles.errorText}>Error: {error}</p>
        ) : !item ? (
          <p>Newsletter not found.</p>
        ) : (
          <>
            {/* Date */}
            <p className={styles.metadata}>
              {item?.date
                ? `Published on ${format(new Date(item.date), 'MMMM d, yyyy')}`
                : ''}
            </p>

            {/* Title */}
            <h1 className={styles.title}>{item?.heading || ''}</h1>

            {/* Rich HTML body */}
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: renderHtml(item) }}
            />

            {/* Source */}
            {item?.source && (
              <>
                <p className={styles.footerSource}>Source: {item.source}</p>
                <hr className={styles.hr} />
              </>
            )}

            {/* Sign-off */}
            <p className={styles.signoffTitle}>Have a great week ahead!</p>
            <p className={styles.signoffSub}>Co-founders, Plootus</p>
            <hr className={styles.hr} />

            {/* Vision */}
            <p className={styles.vision}>
              Our vision is to democratize retirement planning and make it
              available to everyone
            </p>
            <p className={styles.subtext}>
              Feel free to reach out to us if you have any questions{' '}
              <a href="/faqs#contact">here</a>
            </p>

            {/* Disclaimer */}
            <p className={styles.disclaimer}>
              Disclaimer: Plootus (an SEC-registered investment advisor) may be
              compensated for third-party referrals, which are for informational
              purposes only and not endorsements.
            </p>

            {/* Social share */}
            <div className={styles.socialRow}>
              <a
                href="#"
                className={`${styles.socialBtn} ${styles.facebook}`}
                aria-label="Share on Facebook"
              >
                f
              </a>
              <a
                href="#"
                className={`${styles.socialBtn} ${styles.x}`}
                aria-label="Share on X"
              >
                X
              </a>
              <a
                href="#"
                className={`${styles.socialBtn} ${styles.linkedin}`}
                aria-label="Share on LinkedIn"
              >
                in
              </a>
              <a
                href="/faqs#contact"
                className={`${styles.socialBtn} ${styles.email}`}
                aria-label="Contact via email"
              >
                ✉
              </a>
            </div>

            {/* Copyright */}
            <div className={styles.copyrightBar}>
              {`Copyright © 2018-${new Date().getFullYear()} Plootus.com, All Rights Reserved`}
            </div>

            {/* Unsubscribe */}
            <div className={styles.unsubscribe}>
              <a href="/confirm-unsubscribe">Unsubscribe</a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NewsletterDetails;
