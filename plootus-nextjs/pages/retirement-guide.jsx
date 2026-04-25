import Head from 'next/head';
import PlootusHub from '../components/hub/PlootusHub';

export default function RetirementGuide() {
  return (
    <>
      <Head>
        <title>Retirement &amp; Personal Finance Resource Hub | Plootus</title>
        <meta
          name="description"
          content="Every retirement calculator, data report, state comparison, and planning guide — 44 free resources built for people who want real answers. Compare states, benchmark savings, plan healthcare."
        />
        <meta
          name="keywords"
          content="retirement planning, retirement calculator, 401k by age, best states to retire, Social Security benefits, healthcare costs retirement, Roth vs traditional"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.plootus.com/retirement-guide" />
        <meta property="og:title" content="Retirement & Personal Finance Resource Hub | Plootus" />
        <meta
          property="og:description"
          content="44 free retirement planning resources: calculators, state comparisons, savings benchmarks, healthcare guides, and tax strategies — all in one place."
        />
      </Head>
      <PlootusHub />
    </>
  );
}
