import Head from 'next/head';
import AverageStudentLoanDebt from '../components/benchmarks/AverageStudentLoanDebt/AverageStudentLoanDebt';

export default function AverageStudentLoanDebtPage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Average Student Loan Debt in 2026 | Plootus</title>
        <meta
          name="description"
          content="Explore the latest statistics on average student loan debt by age and degree type. Learn how student debt impacts retirement planning."
        />
        <meta
          name="keywords"
          content="average student loan debt, student debt statistics, student loans by age, paying off student loans"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AverageStudentLoanDebt />
    </>
  );
}
