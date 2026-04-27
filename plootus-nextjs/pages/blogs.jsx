import Head from 'next/head';
import BlogsPage from '../components/blogs/BlogsPage';

export default function Blogs() {
  const pageTitle = "Finance 101 — Financial Tips, Retirement Planning & More | Plootus";
  const pageDesc = "Explore Finance 101 for expert-backed articles on retirement planning, 401k optimization, personal finance strategies, and wealth building. Start your journey today.";
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content="finance 101, financial literacy, retirement planning, 401k advice, investment tips, personal finance blogs" />
        <link rel="canonical" href="https://www.plootus.com/blogs" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.plootus.com/blogs" />
        <meta property="og:image" content="https://www.plootus.com/images/blogs-hero-share.png" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Finance 101 - Plootus Blogs",
              "description": pageDesc,
              "url": "https://www.plootus.com/blogs",
              "publisher": {
                "@type": "Organization",
                "name": "Plootus",
                "url": "https://www.plootus.com"
              }
            }),
          }}
        />
      </Head>
      <BlogsPage />
    </>
  );
}
