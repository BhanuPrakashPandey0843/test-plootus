import Head from 'next/head';
import AverageSalaryByState from '../components/incomecosts/AverageSalaryByState/AverageSalaryByState';

export default function AverageSalaryByStatePage() {
  return (
    <>
      <Head>
        <title>Average Salary by State (2024) | Plootus</title>
        <meta name="description" content="What is a 'good' salary in 2024? We analyze the latest Bureau of Labor Statistics (BLS) data to show the average and median salary for all 50 U.S. states." />
        <link rel="canonical" href="https://www.plootus.com/average-salary-by-state" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <AverageSalaryByState />
    </>
  );
}
