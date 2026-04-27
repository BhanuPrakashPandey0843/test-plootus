import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import styles from './ToolStateComparison.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const statesData = {
  "Alabama":      { cost:48800, incTax:"5.0% max",    incTaxNum:5.0,  taxSS:false, propTax:0.42, healthcare:48, qol:43, minSavings:800000  },
  "Alaska":       { cost:65000, incTax:"None",         incTaxNum:0,    taxSS:false, propTax:1.04, healthcare:5,  qol:34, minSavings:1020000 },
  "Arizona":      { cost:62000, incTax:"2.5% flat",   incTaxNum:2.5,  taxSS:false, propTax:0.62, healthcare:16, qol:32, minSavings:970000  },
  "Arkansas":     { cost:48400, incTax:"4.4% max",    incTaxNum:4.4,  taxSS:false, propTax:0.63, healthcare:45, qol:50, minSavings:785000  },
  "California":   { cost:84600, incTax:"13.3% max",   incTaxNum:13.3, taxSS:false, propTax:0.71, healthcare:8,  qol:22, minSavings:1492650 },
  "Colorado":     { cost:71000, incTax:"4.4% flat",   incTaxNum:4.4,  taxSS:true,  propTax:0.52, healthcare:3,  qol:19, minSavings:1150000 },
  "Connecticut":  { cost:70500, incTax:"6.99% max",   incTaxNum:6.99, taxSS:true,  propTax:1.79, healthcare:6,  qol:23, minSavings:1140000 },
  "Delaware":     { cost:56000, incTax:"6.6% max",    incTaxNum:6.6,  taxSS:false, propTax:0.56, healthcare:15, qol:36, minSavings:870000  },
  "Florida":      { cost:57000, incTax:"None",         incTaxNum:0,    taxSS:false, propTax:0.83, healthcare:27, qol:1,  minSavings:1010000 },
  "Georgia":      { cost:50800, incTax:"5.39% flat",  incTaxNum:5.39, taxSS:false, propTax:0.92, healthcare:40, qol:40, minSavings:825000  },
  "Hawaii":       { cost:129296,incTax:"11% max",     incTaxNum:11.0, taxSS:false, propTax:0.32, healthcare:11, qol:21, minSavings:2610050 },
  "Idaho":        { cost:57000, incTax:"5.8% max",    incTaxNum:5.8,  taxSS:false, propTax:0.69, healthcare:26, qol:24, minSavings:890000  },
  "Illinois":     { cost:65000, incTax:"4.95% flat",  incTaxNum:4.95, taxSS:false, propTax:2.07, healthcare:30, qol:14, minSavings:1100000 },
  "Indiana":      { cost:50400, incTax:"3.0% flat",   incTaxNum:3.0,  taxSS:false, propTax:0.87, healthcare:41, qol:35, minSavings:815000  },
  "Iowa":         { cost:50200, incTax:"3.8% flat",   incTaxNum:3.8,  taxSS:false, propTax:1.50, healthcare:28, qol:11, minSavings:810000  },
  "Kansas":       { cost:47200, incTax:"5.7% max",    incTaxNum:5.7,  taxSS:false, propTax:1.33, healthcare:35, qol:31, minSavings:760000  },
  "Kentucky":     { cost:51600, incTax:"4.0% flat",   incTaxNum:4.0,  taxSS:false, propTax:0.86, healthcare:47, qol:42, minSavings:780000  },
  "Louisiana":    { cost:54000, incTax:"3.0% max",    incTaxNum:3.0,  taxSS:false, propTax:0.55, healthcare:46, qol:46, minSavings:840000  },
  "Maine":        { cost:64000, incTax:"7.15% max",   incTaxNum:7.15, taxSS:false, propTax:1.19, healthcare:14, qol:4,  minSavings:1000000 },
  "Maryland":     { cost:68000, incTax:"5.75% max",   incTaxNum:5.75, taxSS:false, propTax:1.09, healthcare:22, qol:20, minSavings:1090000 },
  "Massachusetts":{ cost:89400, incTax:"5.0% flat",   incTaxNum:5.0,  taxSS:false, propTax:1.14, healthcare:2,  qol:2,  minSavings:1612650 },
  "Michigan":     { cost:58000, incTax:"4.25% flat",  incTaxNum:4.25, taxSS:false, propTax:1.44, healthcare:29, qol:16, minSavings:910000  },
  "Minnesota":    { cost:62000, incTax:"9.85% max",   incTaxNum:9.85, taxSS:true,  propTax:1.08, healthcare:1,  qol:7,  minSavings:960000  },
  "Mississippi":  { cost:45600, incTax:"4.0% flat",   incTaxNum:4.0,  taxSS:false, propTax:0.67, healthcare:49, qol:49, minSavings:680000  },
  "Missouri":     { cost:49600, incTax:"4.8% max",    incTaxNum:4.8,  taxSS:false, propTax:1.01, healthcare:32, qol:29, minSavings:790000  },
  "Montana":      { cost:57000, incTax:"5.9% max",    incTaxNum:5.9,  taxSS:true,  propTax:0.86, healthcare:23, qol:10, minSavings:890000  },
  "Nebraska":     { cost:57000, incTax:"5.84% max",   incTaxNum:5.84, taxSS:false, propTax:1.63, healthcare:19, qol:28, minSavings:890000  },
  "Nevada":       { cost:58000, incTax:"None",         incTaxNum:0,    taxSS:false, propTax:0.55, healthcare:42, qol:45, minSavings:905000  },
  "New Hampshire":{ cost:63000, incTax:"None",         incTaxNum:0,    taxSS:false, propTax:2.02, healthcare:20, qol:8,  minSavings:980000  },
  "New Jersey":   { cost:74000, incTax:"10.75% max",  incTaxNum:10.75,taxSS:false, propTax:2.23, healthcare:9,  qol:30, minSavings:1227650 },
  "New Mexico":   { cost:54000, incTax:"5.9% max",    incTaxNum:5.9,  taxSS:true,  propTax:0.80, healthcare:36, qol:44, minSavings:840000  },
  "New York":     { cost:82000, incTax:"10.9% max",   incTaxNum:10.9, taxSS:false, propTax:1.62, healthcare:12, qol:12, minSavings:1427650 },
  "North Carolina":{ cost:51200, incTax:"4.5% flat",  incTaxNum:4.5,  taxSS:false, propTax:0.80, healthcare:37, qol:26, minSavings:830000  },
  "North Dakota": { cost:52000, incTax:"2.5% max",    incTaxNum:2.5,  taxSS:false, propTax:0.99, healthcare:7,  qol:33, minSavings:820000  },
  "Ohio":         { cost:51400, incTax:"3.5% max",    incTaxNum:3.5,  taxSS:false, propTax:1.59, healthcare:38, qol:13, minSavings:800000  },
  "Oklahoma":     { cost:46800, incTax:"4.75% max",   incTaxNum:4.75, taxSS:false, propTax:0.90, healthcare:43, qol:48, minSavings:750000  },
  "Oregon":       { cost:69000, incTax:"9.9% max",    incTaxNum:9.9,  taxSS:false, propTax:0.97, healthcare:24, qol:27, minSavings:1110000 },
  "Pennsylvania": { cost:58000, incTax:"3.07%",       incTaxNum:3.07, taxSS:false, propTax:1.42, healthcare:13, qol:5,  minSavings:910000  },
  "Rhode Island": { cost:66000, incTax:"5.99% max",   incTaxNum:5.99, taxSS:true,  propTax:1.63, healthcare:21, qol:39, minSavings:1040000 },
  "South Carolina":{ cost:50600, incTax:"6.4% max",   incTaxNum:6.4,  taxSS:false, propTax:0.57, healthcare:34, qol:37, minSavings:820000  },
  "South Dakota": { cost:52000, incTax:"None",         incTaxNum:0,    taxSS:false, propTax:1.01, healthcare:4,  qol:25, minSavings:880000  },
  "Tennessee":    { cost:49200, incTax:"None",         incTaxNum:0,    taxSS:false, propTax:0.66, healthcare:44, qol:47, minSavings:820000  },
  "Texas":        { cost:64000, incTax:"None",         incTaxNum:0,    taxSS:false, propTax:1.63, healthcare:39, qol:38, minSavings:910000  },
  "Utah":         { cost:61000, incTax:"4.55% flat",  incTaxNum:4.55, taxSS:true,  propTax:0.63, healthcare:31, qol:18, minSavings:940000  },
  "Vermont":      { cost:70000, incTax:"8.75% max",   incTaxNum:8.75, taxSS:true,  propTax:1.96, healthcare:10, qol:3,  minSavings:1130000 },
  "Virginia":     { cost:62000, incTax:"5.75% max",   incTaxNum:5.75, taxSS:false, propTax:0.84, healthcare:25, qol:15, minSavings:940000  },
  "Washington":   { cost:72000, incTax:"None*",        incTaxNum:0,    taxSS:false, propTax:0.98, healthcare:17, qol:17, minSavings:1170000 },
  "West Virginia":{ cost:47600, incTax:"5.12% max",   incTaxNum:5.12, taxSS:false, propTax:0.59, healthcare:50, qol:41, minSavings:720000  },
  "Wisconsin":    { cost:57000, incTax:"7.65% max",   incTaxNum:7.65, taxSS:false, propTax:1.85, healthcare:18, qol:9,  minSavings:895000  },
  "Wyoming":      { cost:52000, incTax:"None",         incTaxNum:0,    taxSS:false, propTax:0.53, healthcare:33, qol:6,  minSavings:990000  }
};

const stateNames = Object.keys(statesData).sort();

const ToolStateComparison = () => {
  const router = useRouter();
  const [stateA, setStateA] = useState('New York');
  const [stateB, setStateB] = useState('Florida');
  const [annualSpend, setAnnualSpend] = useState(60000);
  const [ssIncome, setSsIncome] = useState(24894);
  const [retireYears, setRetireYears] = useState(25);

  const costChartRef = useRef(null);
  const savingsChartRef = useRef(null);
  const costChartInstance = useRef(null);
  const savingsChartInstance = useRef(null);

  useEffect(() => {
    updateCharts();
    return () => {
      if (costChartInstance.current) costChartInstance.current.destroy();
      if (savingsChartInstance.current) savingsChartInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
    updateCharts();
  }, [stateA, stateB, annualSpend, ssIncome, retireYears]);

  const fmt = (n) => '$' + Math.round(n).toLocaleString();
  const fmtK = (n) => {
    if (n >= 1000000) return '$' + (n / 1000000).toFixed(2) + 'M';
    return '$' + Math.round(n / 1000).toLocaleString() + 'K';
  };
  const rankLabel = (r) => {
    const s = ['Outstanding', 'Excellent', 'Very Good', 'Good', 'Above Average', 'Average', 'Below Average', 'Poor', 'Very Poor', 'Critical'];
    return s[Math.min(Math.floor((r - 1) / 5), 9)] || 'N/A';
  };
  const getGrade = (incTaxNum, taxSS, propTax) => {
    let score = 100;
    score -= incTaxNum * 3;
    if (taxSS) score -= 15;
    score -= (propTax - 0.5) * 8;
    if (score >= 85) return 'A+';
    if (score >= 75) return 'A';
    if (score >= 65) return 'B';
    if (score >= 50) return 'C';
    return 'D';
  };

  const A = statesData[stateA];
  const B = statesData[stateB];
  const natAvg = 57800;
  const ratioA = A.cost / natAvg;
  const ratioB = B.cost / natAvg;
  const adjCostA = Math.round(annualSpend * ratioA);
  const adjCostB = Math.round(annualSpend * ratioB);
  const drawA = Math.max(0, adjCostA - ssIncome);
  const drawB = Math.max(0, adjCostB - ssIncome);
  const reqA = Math.round(drawA / 0.04);
  const reqB = Math.round(drawB / 0.04);
  const annualDiff = Math.abs(adjCostA - adjCostB);
  const lifetime = annualDiff * retireYears;
  const savingsDiff = Math.abs(reqA - reqB);
  const taxSavings = Math.abs(B.incTaxNum - A.incTaxNum) / 100 * annualSpend;
  const cheaper = adjCostA <= adjCostB ? 'A' : 'B';
  const cheaperName = cheaper === 'A' ? stateA : stateB;
  const winner = adjCostA < adjCostB ? 'a' : adjCostB < adjCostA ? 'b' : 'tie';
  const winnerName = winner === 'a' ? stateA : winner === 'b' ? stateB : 'Tie';
  const gradeA = getGrade(A.incTaxNum, A.taxSS, A.propTax);
  const gradeB = getGrade(B.incTaxNum, B.taxSS, B.propTax);
  const gradeWinner = ['A+', 'A', 'B', 'C', 'D'].indexOf(gradeA) < ['A+', 'A', 'B', 'C', 'D'].indexOf(gradeB) ? 'A' : 'B';

  const updateCharts = () => {
    // Cost Chart
    if (costChartRef.current) {
      const ctx = costChartRef.current.getContext('2d');
      if (costChartInstance.current) costChartInstance.current.destroy();
      costChartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [stateA, stateB, 'National Avg.'],
          datasets: [{
            data: [adjCostA, adjCostB, Math.round(annualSpend)],
            backgroundColor: ['rgba(59,91,219,0.8)', 'rgba(44,182,125,0.8)', 'rgba(107,127,168,0.5)'],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => '$' + c.raw.toLocaleString() + '/yr' } } },
          scales: {
            x: { ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { display: false } },
            y: { ticks: { callback: v => '$' + (v / 1000).toFixed(0) + 'K', font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { color: '#E2E8F4' } }
          }
        }
      });
    }

    // Savings Chart
    if (savingsChartRef.current) {
      const ctx = savingsChartRef.current.getContext('2d');
      if (savingsChartInstance.current) savingsChartInstance.current.destroy();
      savingsChartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [stateA, stateB],
          datasets: [{ data: [reqA, reqB], backgroundColor: ['rgba(59,91,219,0.8)', 'rgba(44,182,125,0.8)'], borderRadius: 6 }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => '$' + c.raw.toLocaleString() } } },
          scales: {
            x: { ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { display: false } },
            y: { ticks: { callback: v => '$' + (v / 1000000).toFixed(1) + 'M', font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { color: '#E2E8F4' } }
          }
        }
      });
    }
  };

  const makeRow = (label, valA, valB, betterIs) => {
    const cA = betterIs === 'A' ? styles.crCellBetter : betterIs === 'B' ? styles.crCellWorse : '';
    const cB = betterIs === 'B' ? styles.crCellBetter : betterIs === 'A' ? styles.crCellWorse : '';
    return (
      <div className={styles.crRow} key={label}>
        <div className={styles.crCell}>{label}</div>
        <div className={`${styles.crCell} ${cA}`}>{valA}</div>
        <div className={`${styles.crCell} ${cB}`}>{valB}</div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>State Retirement Comparison Tool 2026 | Compare Any 2 States | Plootus</title>
        <meta name="description" content="Pick any two states and instantly see the full retirement cost comparison — annual expenses, taxes, minimum savings required, and how much you'd save over 25 years." />
        <link rel="canonical" href="https://www.plootus.com/tool-state-comparison" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "State Retirement Comparison Tool",
            "description": "Interactive tool to compare retirement costs, taxes, and savings requirements across all 50 U.S. states.",
            "applicationCategory": "FinancialApplication",
            "operatingSystem": "All",
            "author": {
              "@type": "Organization",
              "name": "Plootus"
            }
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🛠️ Interactive Tool · Plootus 2026</div>
          <h1>State Retirement Comparison Tool</h1>
          <p className={styles.heroSub}>Pick any two states and instantly see the full cost comparison — annual expenses, taxes, minimum savings required, and how much you'd save over 25 years by choosing the right state.</p>
        </div>
      </div>

      <div className={styles.toolOuter} itemScope itemType="https://schema.org/Article">
        {/* State Picker */}
        <div className={styles.statePicker}>
          <div className={styles.pickerGroup}>
            <div className={styles.pickerLabel}>State A</div>
            <select className={`${styles.pickerSelect} ${styles.pickerSelectA}`} value={stateA} onChange={(e) => setStateA(e.target.value)}>
              {stateNames.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '2px' }}>
            <div className={styles.vsBadge}>VS</div>
          </div>
          <div className={styles.pickerGroup}>
            <div className={styles.pickerLabel}>State B</div>
            <select className={`${styles.pickerSelect} ${styles.pickerSelectB}`} value={stateB} onChange={(e) => setStateB(e.target.value)}>
              {stateNames.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Inputs row */}
        <div className={styles.inputsRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Annual Spending Need ($)</label>
            <div className={styles.inputPrefix}>
              <span>$</span>
              <input className={styles.inputField} type="number" value={annualSpend} onChange={(e) => setAnnualSpend(parseFloat(e.target.value) || 0)} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Annual SS Income ($)</label>
            <div className={styles.inputPrefix}>
              <span>$</span>
              <input className={styles.inputField} type="number" value={ssIncome} onChange={(e) => setSsIncome(parseFloat(e.target.value) || 0)} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Retirement Length (Years): <span className={styles.rangeVal}>{retireYears}</span></label>
            <input className={styles.inputField} type="range" min="10" max="40" value={retireYears} onChange={(e) => setRetireYears(parseInt(e.target.value))} style={{ padding: '8px 0', border: 'none', background: 'none', cursor: 'pointer' }} />
          </div>
        </div>

        {/* Metric Banners */}
        <div className={styles.metricBanners}>
          <div className={styles.mb}>
            <div className={styles.mbIcon}>📅</div>
            <div className={`${styles.mbValue} ${annualDiff > 0 ? styles.mbValuePositive : styles.mbValueNeutral}`}>{fmt(annualDiff)}/yr</div>
            <div className={styles.mbSub}>{cheaperName} is {fmt(annualDiff)} cheaper per year</div>
          </div>
          <div className={styles.mb}>
            <div className={styles.mbIcon}>💰</div>
            <div className={`${styles.mbValue} ${lifetime > 0 ? styles.mbValuePositive : styles.mbValueNeutral}`}>{fmtK(lifetime)}</div>
            <div className={styles.mbSub}>By choosing {cheaperName} over {retireYears} years</div>
          </div>
          <div className={styles.mb}>
            <div className={styles.mbIcon}>🏦</div>
            <div className={`${styles.mbValue} ${savingsDiff > 0 ? styles.mbValuePositive : styles.mbValueNeutral}`}>{fmtK(savingsDiff)}</div>
            <div className={styles.mbSub}>Less savings needed in {cheaperName}</div>
          </div>
        </div>

        {/* Verdict Box */}
        <div className={styles.verdictBox}>
          <div className={styles.verdictTitle}>
            <span className={styles[`vbWinner${winner.toUpperCase()}`]}>{winnerName}</span> wins overall affordability
          </div>
          <div className={styles.verdictText}>
            Based on your {fmt(annualSpend)}/year spending target, retirement in {stateA} costs approximately {fmt(adjCostA)}/year while {stateB} costs {fmt(adjCostB)}/year — a gap of {fmt(annualDiff)} annually. Over a {retireYears}-year retirement, choosing {cheaperName} saves approximately {fmtK(lifetime)} in total living costs. The required nest egg in {stateA} is {fmtK(reqA)} vs. {fmtK(reqB)} in {stateB}. {A.healthcare < B.healthcare ? stateA : stateB} has better healthcare access (#{Math.min(A.healthcare, B.healthcare)} vs. #{Math.max(A.healthcare, B.healthcare)} nationally). {!A.incTaxNum && !B.incTaxNum ? 'Both states have no income tax.' : A.incTaxNum < B.incTaxNum ? stateA + ' has a lower income tax burden.' : B.incTaxNum < A.incTaxNum ? stateB + ' has a lower income tax burden.' : 'Both states have similar income tax rates.'}
          </div>
        </div>

        {/* Side by side comparison + charts */}
        <div className={styles.resultsLayout}>
          <div className={styles.compareCard}>
            <div className={styles.compareCardTitle}>
              <span>Metric</span>
              <span>{stateA}</span>
              <span>{stateB}</span>
            </div>
            <div>
              {makeRow('Adj. Annual Cost (your budget)', fmt(adjCostA) + '/yr', fmt(adjCostB) + '/yr', adjCostA < adjCostB ? 'A' : 'B')}
              {makeRow('Min. Savings Required (4% rule)', fmtK(reqA), fmtK(reqB), reqA < reqB ? 'A' : 'B')}
              {makeRow('State Income Tax', A.incTax, B.incTax, A.incTaxNum < B.incTaxNum ? 'A' : 'B')}
              {makeRow('Taxes Social Security?', A.taxSS ? '⚠️ Yes' : '✅ No', B.taxSS ? '⚠️ Yes' : '✅ No', A.taxSS === B.taxSS ? '' : A.taxSS ? 'B' : 'A')}
              {makeRow('Property Tax Rate', A.propTax.toFixed(2) + '%', B.propTax.toFixed(2) + '%', A.propTax < B.propTax ? 'A' : 'B')}
              {makeRow('Overall Tax Grade', gradeA, gradeB, gradeWinner)}
              {makeRow('Healthcare Rank (national)', '#' + A.healthcare + '/50 — ' + rankLabel(A.healthcare), '#' + B.healthcare + '/50 — ' + rankLabel(B.healthcare), A.healthcare < B.healthcare ? 'A' : 'B')}
              {makeRow('Quality of Life Rank', '#' + A.qol + '/50', '#' + B.qol + '/50', A.qol < B.qol ? 'A' : 'B')}
              {makeRow('Annual Cost Difference', fmt(annualDiff) + '/year', '—', '')}
              {makeRow('Lifetime Advantage (' + retireYears + 'yr)', cheaper === 'A' ? fmtK(lifetime) + ' saved' : '—', cheaper === 'B' ? fmtK(lifetime) + ' saved' : '—', cheaper)}
            </div>
          </div>

          <div className={styles.chartsCol}>
            <div className={styles.chartCard}>
              <h4>📊 Annual Retirement Cost Comparison</h4>
              <div style={{ height: '200px', position: 'relative' }}>
                <canvas ref={costChartRef}></canvas>
              </div>
            </div>
            <div className={styles.chartCard}>
              <h4>🏦 Required Savings to Retire</h4>
              <div style={{ height: '180px', position: 'relative' }}>
                <canvas ref={savingsChartRef}></canvas>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className={styles.impactCard}>
          <div className={styles.impactTitle}>💡 The Lifetime Financial Impact — Moving from the pricier state to the affordable one over a {retireYears}-year retirement</div>
          <div className={styles.impactGrid}>
            <div className={styles.impactItem}>
              <span className={styles.impactVal}>{fmt(annualDiff)}</span>
              <span className={styles.impactLabel}>Annual savings in living costs</span>
            </div>
            <div className={styles.impactItem}>
              <span className={styles.impactVal}>{fmtK(savingsDiff)}</span>
              <span className={styles.impactLabel}>Savings needed reduction (4% rule)</span>
            </div>
            <div className={styles.inputGroup} style={{ padding: '0 15px' }}>
              <span className={styles.impactVal} style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--navy)' }}>{fmt(taxSavings)}</span>
              <span className={styles.impactLabel}>Est. annual income tax savings</span>
            </div>
            <div className={styles.impactItem}>
              <span className={styles.impactVal}>{fmtK(lifetime + savingsDiff)}</span>
              <span className={styles.impactLabel}>{retireYears}-year total advantage</span>
            </div>
          </div>
        </div>

        <div className={styles.toolCta}>
          <div className={styles.toolCtaText}>
            <h4>See how this affects your actual retirement plan</h4>
            <p>This tool shows the state-level numbers. Plootus connects to your real accounts and shows your personalized retirement readiness — adjusted for whichever state you choose.</p>
          </div>
          <div onClick={() => router.push('/')} className={styles.toolCtaBtn} style={{cursor: 'pointer'}}>Build My Personalized Plan →</div>
        </div>

        <div className={styles.sourcesNote} role="complementary" aria-label="Data sources and methodology">
          <strong>Data Sources:</strong> Annual retirement costs from <abbr title="Bureau of Labor Statistics">BLS</abbr> Consumer Expenditure Survey 2024 (65+ age group) × <abbr title="Missouri Economic Research and Information Center">MERIC</abbr> Q3 2025 Cost of Living Index. Tax data from Kiplinger &amp; SmartAsset 2026. Healthcare rankings from WalletHub 2026 &amp; America's Health Rankings 2024. Minimum savings = (adjusted annual spend − SS income) ÷ 4%. SS average benefit = $24,894/yr (<abbr title="Social Security Administration">SSA</abbr> Nov. 2025). Source: Plootus Research 2026. Tool is for educational planning purposes only and does not constitute financial advice.
        </div>
      </div>
      <PartnersSection 
        titleFontSize="22px"
        titleFontWeight={800}
        titleColor="var(--navy) !important"
        titleLetterSpacing="-0.3px"
        subtitleFontSize="15px"
        subtitleColor="var(--text-mid)"
        rootPadding="40px 0 0"
      />
    </div>
  );
};

export default ToolStateComparison;
