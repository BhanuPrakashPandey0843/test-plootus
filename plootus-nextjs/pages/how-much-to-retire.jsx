import Head from 'next/head';
import HowMuchRetire from '../components/planning/HowMuchRetire/HowMuchRetire';

export default function HowMuchToRetirePage() {
  return (
    <>
      <Head>
        <title>How Much Do I Need to Retire? 2026 Guide | Plootus</title>
        <meta
          name="description"
          content="The complete 2026 guide to calculating how much you need to retire. Learn about the 4% rule, income replacement, and how your state affects your retirement number."
        />
        <meta
          name="keywords"
          content="how much to retire, retirement calculator, 4 percent rule, retirement planning, retirement savings goal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HowMuchRetire />
    </>
  );
}
