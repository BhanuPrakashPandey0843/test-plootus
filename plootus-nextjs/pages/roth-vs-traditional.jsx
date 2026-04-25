import Head from 'next/head';
import RothVsTraditional from '../components/planning/RothVsTraditional/RothVsTraditional';

export default function RothVsTraditionalPage() {
  return (
    <>
      <Head>
        <title>Roth vs Traditional IRA & 401(k): Which is Better? | Plootus</title>
        <meta
          name="description"
          content="Compare Roth and Traditional retirement accounts. Learn when to choose pre-tax vs after-tax contributions to minimize lifetime taxes."
        />
        <meta
          name="keywords"
          content="roth vs traditional, roth ira, traditional ira, roth 401k, pre-tax vs after-tax, retirement accounts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RothVsTraditional />
    </>
  );
}
