import Head from 'next/head';
import MedicareSuplementMedigapComparison from '../components/calculators/MedicareSuplementMedigapComparison/MedicareSuplementMedigapComparison';

export default function MedicareSuplementMedigapComparisonPage() {
  return (
    <>
      <Head>
        <title>Medicare Supplement (Medigap) Comparison | Plootus</title>
        <meta
          name="description"
          content="Compare Medicare Supplement (Medigap) plans A through N. Understand coverage, out-of-pocket limits, and find the best plan for your healthcare needs."
        />
        <meta
          name="keywords"
          content="medicare supplement comparison, medigap plans, medicare plan G vs F, healthcare retirement costs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <MedicareSuplementMedigapComparison />
    </>
  );
}
