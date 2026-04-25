import Head from 'next/head';
import SocialSecurityBenefits from '../components/accounts/SocialSecurityBenefits/SocialSecurityBenefits';

export default function SocialSecurityBenefitsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Social Security Benefits in 2026: When to Claim, Spousal Benefits & the Break-Even Age",
    "description": "Claiming Social Security at the wrong age can cost you $200,000+ in lifetime income. Here's the complete guide to maximizing your benefit — including the strategies most people miss.",
    "author": {
      "@type": "Organization",
      "name": "Plootus"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Plootus",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.plootus.com/logo.png"
      }
    },
    "datePublished": "2026-03-01",
    "dateModified": "2026-03-25"
  };

  return (
    <>
      <Head>
        <title>Social Security Benefits 2026: When to Claim & Break-Even Guide</title>
        <meta name="description" content="Maximize your Social Security benefits in 2026. Learn about Full Retirement Age, spousal benefits, and the break-even age for claiming at 62 vs. 67 vs. 70." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <SocialSecurityBenefits />
    </>
  );
}
