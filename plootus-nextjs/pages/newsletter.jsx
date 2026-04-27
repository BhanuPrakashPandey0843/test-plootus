import Head from 'next/head';
import NewsletterPage from '../components/newsletter/NewsletterPage';

export default function Newsletter() {
  return (
    <>
      <Head>
        <title>Free Retirement &amp; 401k Newsletter — Weekly Insights | Plootus</title>
        <meta
          name="description"
          content="Get Plootus's free weekly newsletter — retirement planning tips, 401k contribution updates, market insights, and personal finance strategies delivered to your inbox. Join thousands of subscribers."
        />
        <meta
          name="keywords"
          content="Plootus newsletters, financial insights, retirement planning, investment strategies, wealth growth"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.plootus.com/newsletter" />
        <meta
          property="og:title"
          content="Join the Free Plootus Newsletter — Retirement Made Simple"
        />
        <meta
          property="og:description"
          content="Weekly retirement planning news and 401k strategies — free, concise, and expert-curated. Sign up in seconds."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.plootus.com/newsletter" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Plootus Newsletter',
              description:
                'Free weekly newsletter covering retirement planning, 401k strategies, and personal finance insights.',
              url: 'https://www.plootus.com/newsletter',
              publisher: {
                '@type': 'Organization',
                name: 'Plootus',
                url: 'https://www.plootus.com',
              },
            }),
          }}
        />
      </Head>
      <NewsletterPage />
    </>
  );
}
