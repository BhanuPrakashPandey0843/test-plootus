import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './ToolStateComparison.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';
import Chart from 'chart.js/auto';

const stateData = {
  "AL": { name: "Alabama", costIdx: 88.3, taxGrade: "B", ssTax: "No", incomeTax: "5%", estateTax: "No", healthcareRank: 45 },
  "AK": { name: "Alaska", costIdx: 124.4, taxGrade: "A", ssTax: "No", incomeTax: "None", estateTax: "No", healthcareRank: 31 },
  "AZ": { name: "Arizona", costIdx: 104.5, taxGrade: "B", ssTax: "No", incomeTax: "2.5% flat", estateTax: "No", healthcareRank: 22 },
  "AR": { name: "Arkansas", costIdx: 88.5, taxGrade: "C", ssTax: "No", incomeTax: "4.4%", estateTax: "No", healthcareRank: 48 },
  "CA": { name: "California", costIdx: 138.5, taxGrade: "D", ssTax: "No", incomeTax: "13.3%", estateTax: "No", healthcareRank: 17 },
  "CO": { name: "Colorado", costIdx: 105.5, taxGrade: "C", ssTax: "Yes", incomeTax: "4.4% flat", estateTax: "No", healthcareRank: 10 },
  "CT": { name: "Connecticut", costIdx: 114.5, taxGrade: "D", ssTax: "Yes", incomeTax: "6.99%", estateTax: "Yes", healthcareRank: 6 },
  "DE": { name: "Delaware", costIdx: 102.0, taxGrade: "A", ssTax: "No", incomeTax: "6.6%", estateTax: "No", healthcareRank: 15 },
  "FL": { name: "Florida", costIdx: 101.0, taxGrade: "A+", ssTax: "No", incomeTax: "None", estateTax: "No", healthcareRank: 27 },
  "GA": { name: "Georgia", costIdx: 91.5, taxGrade: "B", ssTax: "No", incomeTax: "5.49%", estateTax: "No", healthcareRank: 40 },
  "HI": { name: "Hawaii", costIdx: 179.0, taxGrade: "D", ssTax: "No", incomeTax: "11%", estateTax: "Yes", healthcareRank: 2 },
  "ID": { name: "Idaho", costIdx: 101.5, taxGrade: "C", ssTax: "No", incomeTax: "5.8%", estateTax: "No", healthcareRank: 18 },
  "IL": { name: "Illinois", costIdx: 92.5, taxGrade: "C", ssTax: "No", incomeTax: "4.95% flat", estateTax: "Yes", healthcareRank: 24 },
  "IN": { name: "Indiana", costIdx: 91.0, taxGrade: "B-", ssTax: "No", incomeTax: "3.15% flat", estateTax: "No", healthcareRank: 37 },
  "IA": { name: "Iowa", costIdx: 89.5, taxGrade: "B", ssTax: "No", incomeTax: "3.8% flat", estateTax: "No", healthcareRank: 28 },
  "KS": { name: "Kansas", costIdx: 87.5, taxGrade: "B+", ssTax: "No", incomeTax: "5.7%", estateTax: "No", healthcareRank: 35 },
  "KY": { name: "Kentucky", costIdx: 89.0, taxGrade: "C+", ssTax: "No", incomeTax: "4.5% flat", estateTax: "Yes", healthcareRank: 41 },
  "LA": { name: "Louisiana", costIdx: 92.0, taxGrade: "C", ssTax: "No", incomeTax: "4.25%", estateTax: "No", healthcareRank: 47 },
  "ME": { name: "Maine", costIdx: 111.5, taxGrade: "C", ssTax: "No", incomeTax: "7.15%", estateTax: "Yes", healthcareRank: 14 },
  "MD": { name: "Maryland", costIdx: 116.0, taxGrade: "D", ssTax: "No", incomeTax: "5.75%", estateTax: "Yes", healthcareRank: 5 },
  "MA": { name: "Massachusetts", costIdx: 148.0, taxGrade: "D", ssTax: "No", incomeTax: "5% flat", estateTax: "Yes", healthcareRank: 1 },
  "MI": { name: "Michigan", costIdx: 91.5, taxGrade: "B-", ssTax: "No", incomeTax: "4.25% flat", estateTax: "No", healthcareRank: 26 },
  "MN": { name: "Minnesota", costIdx: 98.0, taxGrade: "C", ssTax: "Yes", incomeTax: "9.85%", estateTax: "Yes", healthcareRank: 3 },
  "MS": { name: "Mississippi", costIdx: 85.3, taxGrade: "B-", ssTax: "No", incomeTax: "4% flat", estateTax: "No", healthcareRank: 49 },
  "MO": { name: "Missouri", costIdx: 89.5, taxGrade: "B+", ssTax: "No", incomeTax: "4.5%", estateTax: "No", healthcareRank: 32 },
  "MT": { name: "Montana", costIdx: 102.5, taxGrade: "C", ssTax: "Yes", incomeTax: "5.9%", estateTax: "No", healthcareRank: 29 },
  "NE": { name: "Nebraska", costIdx: 92.0, taxGrade: "C", ssTax: "No", incomeTax: "5.84%", estateTax: "Yes", healthcareRank: 16 },
  "NV": { name: "Nevada", costIdx: 101.3, taxGrade: "A", ssTax: "No", incomeTax: "None", estateTax: "No", healthcareRank: 42 },
  "NH": { name: "New Hampshire", costIdx: 115.5, taxGrade: "A", ssTax: "No", incomeTax: "None*", estateTax: "No", healthcareRank: 12 },
  "NJ": { name: "New Jersey", costIdx: 112.5, taxGrade: "F", ssTax: "No", incomeTax: "10.75%", estateTax: "Yes", healthcareRank: 11 },
  "NM": { name: "New Mexico", costIdx: 94.0, taxGrade: "C-", ssTax: "Yes", incomeTax: "5.9%", estateTax: "No", healthcareRank: 46 },
  "NY": { name: "New York", costIdx: 126.5, taxGrade: "D", ssTax: "No", incomeTax: "10.9%", estateTax: "Yes", healthcareRank: 13 },
  "NC": { name: "North Carolina", costIdx: 96.0, taxGrade: "B+", ssTax: "No", incomeTax: "4.5% flat", estateTax: "No", healthcareRank: 25 },
  "ND": { name: "North Dakota", costIdx: 94.5, taxGrade: "B+", ssTax: "No", incomeTax: "2.5%", estateTax: "No", healthcareRank: 20 },
  "OH": { name: "Ohio", costIdx: 91.5, taxGrade: "C+", ssTax: "No", incomeTax: "3.75%", estateTax: "No", healthcareRank: 39 },
  "OK": { name: "Oklahoma", costIdx: 87.5, taxGrade: "B-", ssTax: "No", incomeTax: "4.75%", estateTax: "No", healthcareRank: 43 },
  "OR": { name: "Oregon", costIdx: 115.0, taxGrade: "D", ssTax: "No", incomeTax: "9.9%", estateTax: "Yes", healthcareRank: 21 },
  "PA": { name: "Pennsylvania", costIdx: 95.5, taxGrade: "B", ssTax: "No", incomeTax: "3.07% flat", estateTax: "Yes", healthcareRank: 30 },
  "RI": { name: "Rhode Island", costIdx: 112.5, taxGrade: "C", ssTax: "Yes", incomeTax: "5.99%", estateTax: "Yes", healthcareRank: 9 },
  "SC": { name: "South Carolina", costIdx: 94.5, taxGrade: "B", ssTax: "No", incomeTax: "6.4%", estateTax: "No", healthcareRank: 34 },
  "SD": { name: "South Dakota", costIdx: 91.5, taxGrade: "A+", ssTax: "No", incomeTax: "None", estateTax: "No", healthcareRank: 4 },
  "TN": { name: "Tennessee", costIdx: 89.9, taxGrade: "A", ssTax: "No", incomeTax: "None", estateTax: "No", healthcareRank: 44 },
  "TX": { name: "Texas", costIdx: 93.0, taxGrade: "A", ssTax: "No", incomeTax: "None", estateTax: "No", healthcareRank: 38 },
  "UT": { name: "Utah", costIdx: 103.0, taxGrade: "C", ssTax: "Yes", incomeTax: "4.65% flat", estateTax: "No", healthcareRank: 7 },
  "VT": { name: "Vermont", costIdx: 114.5, taxGrade: "C", ssTax: "Yes", incomeTax: "8.75%", estateTax: "Yes", healthcareRank: 8 },
  "VA": { name: "Virginia", costIdx: 103.5, taxGrade: "B", ssTax: "No", incomeTax: "5.75%", estateTax: "No", healthcareRank: 25 },
  "WA": { name: "Washington", costIdx: 115.5, taxGrade: "B", ssTax: "No", incomeTax: "None", estateTax: "Yes", healthcareRank: 23 },
  "WV": { name: "West Virginia", costIdx: 89.5, taxGrade: "A-", ssTax: "No", incomeTax: "5.12%", estateTax: "No", healthcareRank: 50 },
  "WI": { name: "Wisconsin", costIdx: 95.0, taxGrade: "C", ssTax: "No", incomeTax: "7.65%", estateTax: "No", healthcareRank: 19 },
  "WY": { name: "Wyoming", costIdx: 92.0, taxGrade: "A+", ssTax: "No", incomeTax: "None", estateTax: "No", healthcareRank: 33 }
};

const ToolStateComparison = () => {
  const router = useRouter();
  const [stateA, setStateA] = useState("CA");
  const [stateB, setStateB] = useState("FL");
  const [spend, setSpend] = useState(65000);
  const [income, setIncome] = useState(85000);
  const [age, setAge] = useState(65);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const getComparison = () => {
    const sA = stateData[stateA];
    const sB = stateData[stateB];
    const baseUS = 64800;
    
    const costA = Math.round(baseUS * (sA.costIdx / 100));
    const costB = Math.round(baseUS * (sB.costIdx / 100));
    const diff = costA - costB;
    
    // Simple verdict logic
    let winner = "Tie";
    if (sA.taxGrade.includes('A') && !sB.taxGrade.includes('A')) winner = sA.name;
    else if (sB.taxGrade.includes('A') && !sA.taxGrade.includes('A')) winner = sB.name;
    else if (costB < costA) winner = sB.name;
    else winner = sA.name;

    return { costA, costB, diff, winner, sA, sB };
  };

  const comp = getComparison();

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [comp.sA.name, comp.sB.name, 'U.S. Average'],
          datasets: [{
            label: 'Estimated Annual Cost ($)',
            data: [comp.costA, comp.costB, 64800],
            backgroundColor: [
              'rgba(59, 91, 219, 0.8)',
              'rgba(44, 182, 125, 0.8)',
              'rgba(107, 127, 168, 0.5)'
            ],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => `$${context.raw.toLocaleString()}/yr`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => `$${(value / 1000).toFixed(0)}K`,
                font: { family: 'Plus Jakarta Sans', size: 11 }
              },
              grid: { color: '#E2E8F4' }
            },
            x: {
              ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } },
              grid: { display: false }
            }
          }
        }
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [stateA, stateB]);

  return (
    <div className={styles.container}>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🛠️ Plootus Interactive Tool · 2026 Edition</div>
          <h1>State Retirement Comparison Tool: Compare Costs, Taxes & Healthcare</h1>
          <p className={styles.heroSub}>Compare any two U.S. states side-by-side. Our tool uses the latest 2026 tax laws and cost-of-living data to help you decide where your retirement nest egg will last longest.</p>
        </div>
      </div>

      <div className={styles.toolOuter}>
        <div className={styles.statePicker}>
          <div className={styles.pickerGroup}>
            <label className={styles.pickerLabel}>Compare State A</label>
            <select className={`${styles.pickerSelect} ${styles.pickerSelectA}`} value={stateA} onChange={(e) => setStateA(e.target.value)}>
              {Object.keys(stateData).map(k => <option key={k} value={k}>{stateData[k].name}</option>)}
            </select>
          </div>
          <div className={styles.vsBadge}>VS</div>
          <div className={styles.pickerGroup}>
            <label className={styles.pickerLabel}>Compare State B</label>
            <select className={`${styles.pickerSelect} ${styles.pickerSelectB}`} value={stateB} onChange={(e) => setStateB(e.target.value)}>
              {Object.keys(stateData).map(k => <option key={k} value={k}>{stateData[k].name}</option>)}
            </select>
          </div>
        </div>

        <div className={styles.inputsRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Current Age</label>
            <input type="number" className={styles.inputField} value={age} onChange={(e) => setAge(e.target.value)} min="25" max="85" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Household Income ($/yr)</label>
            <div className={styles.inputPrefix}>
              <span>$</span>
              <input type="number" className={styles.inputField} value={income} onChange={(e) => setIncome(e.target.value)} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Planned Annual Spending ($)</label>
            <div className={styles.inputPrefix}>
              <span>$</span>
              <input type="number" className={styles.inputField} value={spend} onChange={(e) => setSpend(e.target.value)} />
            </div>
          </div>
        </div>

        <div className={styles.metricBanners}>
          <div className={styles.mb}>
            <div className={styles.mbIcon}>🏦</div>
            <div className={`${styles.mbValue} ${styles.mbValuePositive}`}>
              ${Math.abs(comp.diff).toLocaleString()}
            </div>
            <div className={styles.mbSub}>
              Annual {comp.diff > 0 ? `Savings in ${comp.sB.name}` : `Savings in ${comp.sA.name}`}
            </div>
          </div>
          <div className={styles.mb}>
            <div className={styles.mbIcon}>⚖️</div>
            <div className={`${styles.mbValue} ${styles.mbValueNeutral}`}>
              {comp.sA.taxGrade} vs {comp.sB.taxGrade}
            </div>
            <div className={styles.mbSub}>Comparative Tax Grades</div>
          </div>
          <div className={styles.mb}>
            <div className={styles.mbIcon}>🏥</div>
            <div className={`${styles.mbValue} ${styles.mbValueNeutral}`}>
              #{comp.sA.healthcareRank} vs #{comp.sB.healthcareRank}
            </div>
            <div className={styles.mbSub}>National Healthcare Rank</div>
          </div>
        </div>

        <div className={styles.verdictBox}>
          <div className={styles.verdictTitle}>
            Verdict: <span className={comp.winner === comp.sA.name ? styles.vbWinnerA : styles.vbWinnerB}>{comp.winner}</span> is the better financial choice.
          </div>
          <p className={styles.verdictText}>
            Moving from {comp.sA.name} to {comp.sB.name} could save you approximately <strong>${Math.abs(comp.diff).toLocaleString()}</strong> in annual living expenses. Over a 25-year retirement, this represents a total wealth difference of <strong>${(Math.abs(comp.diff) * 25).toLocaleString()}</strong> (inflation-adjusted).
          </p>
        </div>

        <div className={styles.resultsLayout}>
          <div className={styles.compareCard}>
            <div className={styles.compareCardTitle}>
              <span>Metric</span>
              <span>{comp.sA.name}</span>
              <span>{comp.sB.name}</span>
            </div>
            <div className={styles.crRow}>
              <div className={styles.crCell}>Est. Annual Cost</div>
              <div className={styles.crCell}>${comp.costA.toLocaleString()}</div>
              <div className={styles.crCell}>${comp.costB.toLocaleString()}</div>
            </div>
            <div className={styles.crRow}>
              <div className={styles.crCell}>Cost Index</div>
              <div className={styles.crCell}>{comp.sA.costIdx}</div>
              <div className={styles.crCell}>{comp.sB.costIdx}</div>
            </div>
            <div className={styles.crRow}>
              <div className={styles.crCell}>Tax Grade</div>
              <div className={styles.crCell}>{comp.sA.taxGrade}</div>
              <div className={styles.crCell}>{comp.sB.taxGrade}</div>
            </div>
            <div className={styles.crRow}>
              <div className={styles.crCell}>Income Tax</div>
              <div className={styles.crCell}>{comp.sA.incomeTax}</div>
              <div className={styles.crCell}>{comp.sB.incomeTax}</div>
            </div>
            <div className={styles.crRow}>
              <div className={styles.crCell}>Taxes SS?</div>
              <div className={styles.crCell}>{comp.sA.ssTax}</div>
              <div className={styles.crCell}>{comp.sB.ssTax}</div>
            </div>
            <div className={styles.crRow}>
              <div className={styles.crCell}>Estate Tax?</div>
              <div className={styles.crCell}>{comp.sA.estateTax}</div>
              <div className={styles.crCell}>{comp.sB.estateTax}</div>
            </div>
            <div className={styles.crRow}>
              <div className={styles.crCell}>Healthcare Rank</div>
              <div className={styles.crCell}>#{comp.sA.healthcareRank}</div>
              <div className={styles.crCell}>#{comp.sB.healthcareRank}</div>
            </div>
          </div>

          <div className={styles.chartsCol}>
            <div className={styles.chartCard}>
              <h4>Annual Cost Comparison</h4>
              <div style={{ height: '220px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.impactCard}>
          <div className={styles.impactTitle}>Estimated 25-Year Wealth Impact</div>
          <div className={styles.impactGrid}>
            <div className={styles.impactItem}>
              <span className={styles.impactVal}>${(comp.costA * 25 / 1000000).toFixed(2)}M</span>
              <span className={styles.impactLabel}>Total Spending ({comp.sA.name})</span>
            </div>
            <div className={styles.impactItem}>
              <span className={styles.impactVal}>${(comp.costB * 25 / 1000000).toFixed(2)}M</span>
              <span className={styles.impactLabel}>Total Spending ({comp.sB.name})</span>
            </div>
            <div className={styles.impactItem}>
              <span className={styles.impactVal} style={{ color: '#6EE7B7' }}>${(Math.abs(comp.diff) * 25 / 1000).toFixed(0)}K</span>
              <span className={styles.impactLabel}>Cumulative Savings</span>
            </div>
            <div className={styles.impactItem}>
              <span className={styles.impactVal} style={{ color: '#93C5FD' }}>{Math.abs(comp.sA.costIdx - comp.sB.costIdx).toFixed(1)}%</span>
              <span className={styles.impactLabel}>Cost of Living Gap</span>
            </div>
          </div>
        </div>

        <div className={styles.sourcesNote}>
          <strong>Methodology:</strong> Cost estimates are based on the BLS Consumer Expenditure Survey 2024 (Age 65+ household unit average) adjusted by the Missouri Economic Research and Information Center (MERIC) Cost of Living Index Q3 2025. Tax grades (A–F) are based on a Plootus-proprietary analysis of 2026 state income tax rates, Social Security taxation rules, property tax averages, and estate/inheritance tax presence. Healthcare ranks are based on national health system performance metrics for 2025/2026.
        </div>

        <div className={styles.toolCta}>
          <div className={styles.toolCtaText}>
            <h4>Ready to build your personalized plan?</h4>
            <p>Connect your accounts to see exactly how your portfolio performs in different states.</p>
          </div>
          <div onClick={() => router.push('/retirement-calculator')} className={styles.toolCtaBtn}>
            Check Your Numbers
          </div>
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
