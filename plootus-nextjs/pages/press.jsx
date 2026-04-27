import Head from 'next/head';
import PressPage from '../components/press/PressPage';

export default function Press() {
  return (
    <>
      <Head>
        <title>Plootus in the Press — Media Coverage &amp; News Mentions</title>
        <meta
          name="description"
          content="See where Plootus has been featured — EBRI, The College Investor, Experian, PlanSponsor, PlanAdviser. Learn how Plootus is changing retirement planning for millions of Americans."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.plootus.com/press" />
        <meta
          property="og:title"
          content="Plootus in the Press — Featured in Yahoo Finance, Bankrate &amp; More"
        />
        <meta
          property="og:description"
          content="Media coverage of Plootus, the free AI-powered retirement planning platform trusted by thousands managing 401k, 403b, and 457 plans."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.plootus.com/press" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsMediaOrganization',
              name: 'Plootus Press',
              description:
                'Press coverage and media mentions of Plootus, the AI-powered retirement planning platform.',
              url: 'https://www.plootus.com/press',
              publisher: {
                '@type': 'Organization',
                name: 'Plootus',
                url: 'https://www.plootus.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.plootus.com/logo.png',
                },
              },
            }),
          }}
        />
      </Head>
      <PressPage />
    </>
  );
}
