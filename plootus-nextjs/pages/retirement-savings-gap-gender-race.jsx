import Head from 'next/head';
import RetirementSavingGapGenderRace from '../components/planning/RetirementSavingGapGenderRace/RetirementSavingGapGenderRace';

export default function RetirementSavingGapGenderRacePage() {
  return (
    <>
      <Head>
        <title>The Retirement Savings Gap by Gender and Race | Plootus</title>
        <meta
          name="description"
          content="Explore the statistics and causes of the retirement savings gap across different genders and racial groups in the US."
        />
        <meta
          name="keywords"
          content="retirement savings gap, gender wealth gap, racial wealth gap, retirement inequality, retirement statistics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RetirementSavingGapGenderRace />
    </>
  );
}
