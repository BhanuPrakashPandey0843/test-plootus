import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { CheckCircle2, CalendarDays, Clock, ShieldCheck } from 'lucide-react';
import styles from './PlootusVsBestRetirementTools.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const PlootusVsBestRetirementTools = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Number Animation Logic
    const animateStats = () => {
      const stats = document.querySelectorAll('[data-type="statistic"], [data-type="key-statistic"]');
      stats.forEach(el => {
        const val = el.innerText;
        if (val.includes('%') || val.includes('$') || isNaN(val.replace(/[%$,]/g, ''))) {
          // If it has symbols, we need to extract the number
          const numPart = val.replace(/[^0-9.]/g, '');
          if (!numPart) return;
          
          const target = parseFloat(numPart);
          const prefix = val.startsWith('$') ? '$' : '';
          const suffix = val.includes('%') ? '%' : (val.includes('/yr') ? '/yr' : (val.includes('/mo') ? '/mo' : (val.includes('/hr') ? '/hr' : '')));
          
          let startTime = null;
          const duration = 1500;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentVal = Math.floor(progress * target);
            el.innerText = `${prefix}${currentVal.toLocaleString()}${suffix}`;
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              el.innerText = val; // Ensure exact final value
            }
          };
          window.requestAnimationFrame(step);
          return;
        }

        const target = parseInt(val);
        let startTime = null;
        const duration = 1500;

        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          el.innerText = Math.floor(progress * target);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            el.innerText = val;
          }
        };
        window.requestAnimationFrame(step);
      });
    };

    animateStats();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Plootus vs. The Best Retirement Planning Tools (2025) | Plootus</title>
        <meta name="description" content="How does Plootus compare to Empower, Boldin, Fidelity, MaxiFi, YNAB, and 6 more? We break down features, cost, and why most people end up choosing Plootus." />
        <link rel="canonical" href="https://www.plootus.com/plootus-vs-best-retirement-tools" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Plootus Research Team" />
        <meta name="keywords" content="Plootus vs Empower, best retirement planning tools 2025, Plootus vs Boldin, free 401k optimizer, retirement calculator comparison, 401k optimization tool, retirement planning software comparison" />

        {/* Open Graph */}
        <meta property="og:title" content="Plootus vs. The Best Retirement Planning Tools (2025) | Plootus" />
        <meta property="og:description" content="How does Plootus compare to Empower, Boldin, Fidelity, MaxiFi, YNAB, and 6 more? Plootus is the only completely free tool with AI-powered 401(k) fund recommendations and fee analysis. 10 competitors compared across 15+ features. Updated April 2025." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.plootus.com/plootus-vs-best-retirement-tools" />
        <meta property="og:site_name" content="Plootus" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plootus" />
        <meta name="twitter:title" content="Plootus vs. 10 Retirement Tools (2025) — Feature Comparison" />
        <meta name="twitter:description" content="Plootus vs. Empower, Boldin, Fidelity, MaxiFi, YNAB, eMoney, FIRECalc, Pralana, Projection Lab, advisors. Only free tool with AI-powered 401(k) fund recommendations. Supports 401k, 403b, 457, TSP. April 2025." />
      </Head>

      <HubNav />

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}><CheckCircle2 size={13} strokeWidth={2.5} /> 100% Free · No Credit Card Required</div>
          <h1>Plootus vs. The Best Retirement Planning Tools — <em>And Why Plootus Wins</em></h1>
          <p className={styles.heroSub}>There's a lot to consider when picking a retirement planning tool: 401(k) optimization, budgeting, fee analysis, Social Security, and more. We break down how Plootus compares to 10 of the most popular alternatives.</p>
          <div className={styles.heroMeta}>
            <span><CalendarDays size={11} strokeWidth={2.5} style={{display:'inline',verticalAlign:'middle',marginRight:3}} /> Updated April 2025</span>
            <span><Clock size={11} strokeWidth={2.5} style={{display:'inline',verticalAlign:'middle',marginRight:3}} /> 12 min read</span>
            <span><ShieldCheck size={11} strokeWidth={2.5} style={{display:'inline',verticalAlign:'middle',marginRight:3}} /> Verified by the Plootus Team</span>
          </div>
        </div>
      </div>

      {/* Stat Strip */}
      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={`${styles.statNum} ${styles.statNumGreen}`} data-type="statistic">$0</span>
            <span className={styles.statLabel}>Cost — Always Free</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">10</span>
            <span className={styles.statLabel}>Competitors Compared</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">401k</span>
            <span className={styles.statLabel}>403b · 457 · <abbr title="Thrift Savings Plan">TSP</abbr> Supported</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">AI</span>
            <span className={styles.statLabel}>Powered Fund Recommendations</span>
          </div>
        </div>
      </div>

      {/* Page Body */}
      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="intro">
            <div className={styles.sectionLabel}>Overview</div>
            <h2>Choosing the right retirement planning tool</h2>
            <p>Choosing the right retirement planning tool isn't just about features — it's about whether it actually helps you make smarter decisions about your money. Too many tools are expensive, confusing, or built to funnel you toward paid advisory services you may not need.</p>
            <p>Plootus is different. It's <strong>completely free</strong>, AI-powered, and laser-focused on what matters most: helping you pick the best investments in your 401(k), 403(b), 457, or TSP plan; understand your full financial picture; and know exactly when and how you can retire comfortably.</p>

            <h3 style={{ marginTop: '24px' }}>What is Plootus?</h3>
            <p>Plootus is an AI-powered financial wellness platform built to solve one of the most overlooked problems in personal finance: most Americans have no idea whether their 401(k) is invested correctly or if they're on track for retirement. Plootus fixes that — for free.</p>
            <p>The platform integrates your expenses, income, and retirement plan investments into one unified view, then delivers personalized, data-driven recommendations that optimize fund performance, minimize fees, and align with your retirement goals.</p>

            <div className={styles.featurePills}>
              <span className={styles.featurePill}>AI-Powered 401(k) Optimization</span>
              <span className={styles.featurePill}>Fee Minimizer</span>
              <span className={styles.featurePill}>Retirement Income Calculator</span>
              <span className={styles.featurePill}>Social Security Estimator</span>
              <span className={styles.featurePill}>Budget & Expense Tracker</span>
              <span className={styles.featurePill}>Multi-Account Dashboard</span>
              <span className={styles.featurePill}>Job Switch Rollover Analysis</span>
              <span className={styles.featurePill}>30+ Expense Categories</span>
              <span className={styles.featurePill}>iOS & Android App</span>
              <span className={styles.featurePill}>Financial Advisor Access</span>
            </div>

            <div className={styles.plootusMeta}>
              <div className={styles.plootusMetaItem}>
                <div className={styles.plootusMetaLabel}>Cost</div>
                <div className={styles.plootusMetaVal} style={{ color: 'var(--green)' }}>100% Free</div>
              </div>
              <div className={styles.plootusMetaItem}>
                <div className={styles.plootusMetaLabel}>Platform</div>
                <div className={styles.plootusMetaVal}>Web + iOS + Android</div>
              </div>
              <div className={styles.plootusMetaItem}>
                <div className={styles.plootusMetaLabel}>Plans Supported</div>
                <div className={styles.plootusMetaVal}>401k, 403b, 457, TSP</div>
              </div>
            </div>
          </section>

          <section id="comparisons">
            <div className={styles.sectionLabel}>Head-to-Head Comparisons</div>
            <h2>Plootus vs. 10 Popular Retirement Tools</h2>

            {/* Empower */}
            <div className={styles.compCard} id="vs-empower">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. Empower (formerly Personal Capital)</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costPaid}`}>Empower Advisory: 0.49–0.89%/yr AUM</span>
                </div>
              </div>
              <p>Empower is one of the most well-known retirement tools, with strong investment tracking and net-worth aggregation. But Empower is primarily a robo-advisor — its real goal is to convert free users into paid, managed account clients that charge 0.49–0.89% of your assets annually. On a $500,000 portfolio, that's <strong>$2,450–$4,450 per year</strong>.</p>
              <p>Plootus, by contrast, gives you intelligent 401(k) fund recommendations, fee analysis, and retirement projections without ever pushing you toward a paid product.</p>
              <div className={styles.compAdvantageLabel}>✦ Plootus Advantage</div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Zero cost, zero upsell pressure. Where Empower tracks your investment performance, Plootus tells you what to actually <em>do</em> with your 401(k) — which specific funds to pick, how to minimize fees, and how to hit your retirement number.</p>
              <div className={styles.advTags}>
                <span className={styles.advTag}>No AUM fees — ever</span>
                <span className={styles.advTag}>Specific fund-level recommendations</span>
                <span className={styles.advTag}>No sales calls or advisor solicitations</span>
                <span className={styles.advTag}>AI-powered, personalized to your plan</span>
              </div>
            </div>

            {/* Quicken / YNAB */}
            <div className={styles.compCard} id="vs-budgeting">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. Quicken, YNAB & Monarch Money</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costPaid}`}>Quicken: $48–$84/yr · YNAB: ~$109/yr · Monarch: $99/yr</span>
                </div>
              </div>
              <p>Budgeting apps like Quicken, YNAB, and Monarch Money are excellent at tracking where your money is going <em>today</em>. But they fall well short when it comes to answering the most important retirement question: <strong>Am I going to be okay?</strong></p>
              <p>Plootus goes far beyond a budget. It analyzes 30+ expense categories, accounts for inflation and location-based costs, projects healthcare expenses in retirement, and creates a personalized retirement plan — all without requiring you to manually update a thing.</p>
              <div className={styles.compAdvantageLabel}>✦ Plootus Advantage</div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Plootus combines the budgeting context of tools like YNAB with forward-looking retirement projections — and it's free. YNAB costs $109/year just for budgeting, with none of the retirement-specific intelligence Plootus provides.</p>
              <div className={styles.advTags}>
                <span className={styles.advTag}>AI projects future needs, not just past spending</span>
                <span className={styles.advTag}>30+ expense categories analyzed automatically</span>
                <span className={styles.advTag}>Healthcare cost modeling included</span>
                <span className={styles.advTag}>Zero cost vs. $36–$109/yr for competitors</span>
              </div>
            </div>

            {/* Fidelity */}
            <div className={styles.compCard} id="vs-fidelity">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. Fidelity's Retirement Planning Tool</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costPaid}`}>Fidelity: Free (requires registration)</span>
                </div>
              </div>
              <p>Fidelity is a best-in-class brokerage with a decent free retirement calculator — but it's basic, and it's built to keep you in Fidelity's ecosystem. It works well for broad projections if you already have a Fidelity account, but it doesn't dig into the specific fund selection inside your employer 401(k), doesn't optimize for fees, and doesn't provide granular personalization.</p>
              <p>Critically, <strong>Fidelity's tool can't analyze your employer-sponsored plan if it isn't custodied at Fidelity.</strong> Plootus supports thousands of employers and any plan type regardless of who holds the account.</p>
              <div className={styles.compAdvantageLabel}>✦ Plootus Advantage</div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Plootus works with <em>your actual employer plan</em>, not just Fidelity accounts. It recommends specific funds, flags high-fee options, and shows you exactly how to optimize your current allocation.</p>
              <div className={styles.advTags}>
                <span className={styles.advTag}>Works with any employer, any plan type</span>
                <span className={styles.advTag}>Specific fund-level recommendations</span>
                <span className={styles.advTag}>Expense ratio & fee analysis built in</span>
                <span className={styles.advTag}>No account required to get started</span>
              </div>
            </div>

            {/* Boldin */}
            <div className={styles.compCard} id="vs-boldin">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. Boldin (formerly NewRetirement)</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costPaid}`}>Boldin: Free (basic) / $144/yr (PlannerPlus)</span>
                </div>
              </div>
              <p>Boldin is one of the more comprehensive web-based retirement planners, with strong "what-if" scenario modeling, Roth conversion analysis, and tax planning. It's a solid tool — but the most useful features are locked behind a <strong>$144/year PlannerPlus subscription</strong>. And while Boldin handles holistic planning, it doesn't analyze the specific funds inside your 401(k) or tell you which ones to pick.</p>
              <div className={styles.compAdvantageLabel}>✦ Plootus Advantage</div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Plootus delivers actionable, 401(k)-specific advice at zero cost. Boldin's deep planning features cost $144/year and still leave you guessing about which exact funds to select. Plootus answers that question the moment you enter your employer's name.</p>
              <div className={styles.advTags}>
                <span className={styles.advTag}>Free vs. $144/yr for full features</span>
                <span className={styles.advTag}>Fund-level investment recommendations</span>
                <span className={styles.advTag}>Automatic fee optimization</span>
                <span className={styles.advTag}>Mobile app (iOS & Android)</span>
              </div>
            </div>

            {/* MaxiFi */}
            <div className={styles.compCard} id="vs-maxifi">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. MaxiFi</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costPaid}`}>MaxiFi: $109–$149/yr</span>
                </div>
              </div>
              <p>MaxiFi is a powerful, economics-based retirement planner built around the concept of "lifetime spendable income." It's academically rigorous but notoriously complex — not designed for someone who just wants to know if their 401(k) is on track. At $149/year for the premium version, it's also one of the pricier options.</p>
              <div className={styles.compAdvantageLabel}>✦ Plootus Advantage</div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>MaxiFi is built for economics academics and sophisticated DIY planners. Plootus is built for everyone — and delivers the single most impactful retirement decision (your 401(k) allocation) with zero friction and zero cost.</p>
              <div className={styles.advTags}>
                <span className={styles.advTag}>Free vs. $149/yr</span>
                <span className={styles.advTag}>Intuitive interface, minimal learning curve</span>
                <span className={styles.advTag}>Instant 401(k) fund recommendations</span>
                <span className={styles.advTag}>No economics degree required</span>
              </div>
            </div>

            {/* Professional advisor software */}
            <div className={styles.compCard} id="vs-advisor-software">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. Financial Advisor Software (eMoney, RightCapital, MoneyGuide Pro)</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costPaid}`}>Advisor relationship: $2,000–$10,000+/yr</span>
                </div>
              </div>
              <p>Tools like eMoney, RightCapital, and MoneyGuide Pro are professional-grade platforms used by certified financial planners. They are powerful, comprehensive, and generally unavailable to individuals — you need to be a paying client of an advisor who licenses the software.</p>
              <p>Plootus democratizes that level of insight. You get AI-powered, personalized analysis of your employer's retirement plan — the kind of recommendation that would typically require an advisor meeting — for free, on your phone, in under a minute.</p>
              <div className={styles.compAdvantageLabel}>✦ Plootus Advantage</div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>You shouldn't need to pay a financial advisor just to find out if you're picking the right funds. Plootus brings advisor-quality 401(k) analysis directly to individuals — no appointment, no fee, no gatekeeping.</p>
              <div className={styles.advTags}>
                <span className={styles.advTag}>Accessible to anyone, not just advisor clients</span>
                <span className={styles.advTag}>Advisor delegation feature available</span>
                <span className={styles.advTag}>Free vs. thousands per year</span>
                <span className={styles.advTag}>Instant recommendations, no wait time</span>
              </div>
            </div>

            {/* FIRECalc */}
            <div className={styles.compCard} id="vs-firecalc">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. FIRECalc</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costFree}`}>FIRECalc: Free</span>
                </div>
              </div>
              <p>FIRECalc is a free online calculator popular in the FIRE community. It runs historical simulations and produces a visual chart of thousands of potential outcomes. It's genuinely useful for a birds-eye view — but it's a one-page form. No saved data, no personalization, no fund recommendations, and no mobile app.</p>
              <div className={styles.compAdvantageLabel}>✦ Plootus Advantage</div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>FIRECalc shows you possibilities. Plootus tells you how to act on them — with specific, AI-generated recommendations for your actual employer plan.</p>
              <div className={styles.advTags}>
                <span className={styles.advTag}>Saves your data and tracks progress over time</span>
                <span className={styles.advTag}>Actionable fund recommendations, not just charts</span>
                <span className={styles.advTag}>Mobile app for on-the-go access</span>
                <span className={styles.advTag}>Full financial picture, not just withdrawal modeling</span>
              </div>
            </div>

            {/* Pralana Gold */}
            <div className={styles.compCard} id="vs-pralana">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. Pralana Gold</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costPaid}`}>Pralana Gold: $99/yr + Excel required</span>
                </div>
              </div>
              <p>Pralana Gold is a detailed, Excel-based retirement planner favored by spreadsheet enthusiasts. It provides deep modeling with extensive documentation — but it costs $99/year, requires Microsoft Excel, and demands a steep time investment to set up and maintain. It is explicitly not a mobile experience, and it offers no AI-driven fund recommendations.</p>
              <div className={styles.compAdvantageLabel}>✦ Plootus Advantage</div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>If you love spreadsheets, Pralana is impressive. For everyone else, Plootus provides the same retirement clarity with a fraction of the effort, zero cost, and AI-driven intelligence that Excel can't match.</p>
              <div className={styles.advTags}>
                <span className={styles.advTag}>No Excel or spreadsheet knowledge needed</span>
                <span className={styles.advTag}>Works on any device including mobile</span>
                <span className={styles.advTag}>Free vs. $99/yr</span>
                <span className={styles.advTag}>Setup takes minutes, not hours</span>
              </div>
            </div>

            {/* Projection Lab */}
            <div className={styles.compCard} id="vs-projectionlab">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. Projection Lab</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costPaid}`}>Projection Lab: $108/yr</span>
                </div>
              </div>
              <p>Projection Lab is a newer, visually engaging tool with growing functionality — cash flow Sankey diagrams, Monte Carlo simulations, and scenario analysis. At $108/year, it's reasonably priced, but it still doesn't include the core capability most people need: guidance on which 401(k) funds to actually pick.</p>
              <div className={styles.compAdvantageLabel}>✦ Plootus Advantage</div>
              <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>Projection Lab shows you a beautiful picture of your finances. Plootus gives you that picture <em>and</em> tells you how to paint a better one — starting with your very next contribution decision.</p>
              <div className={styles.advTags}>
                <span className={styles.advTag}>Free vs. $108/yr</span>
                <span className={styles.advTag}>401(k) fund recommendations included</span>
                <span className={styles.advTag}>No subscription required ever</span>
                <span className={styles.advTag}>AI-driven, automatic, always up to date</span>
              </div>
            </div>

            {/* Traditional advisors */}
            <div className={styles.compCard} id="vs-advisors">
              <div className={styles.compLabel}>Plootus vs. Competitor</div>
              <h3>Plootus vs. Traditional Financial Advisors</h3>
              <div className={styles.compHeader}>
                <div className={styles.compCosts}>
                  <span className={`${styles.costPill} ${styles.costFree}`}>Plootus: Free</span>
                  <span className={`${styles.costPill} ${styles.costPaid}`}>Financial Advisor: $2,000–$10,000+/yr</span>
                </div>
              </div>
              <p>A good financial advisor offers real human judgment, emotional reassurance, and personalized guidance. For complex estates, business interests, or major life transitions, a certified financial planner can be invaluable. But for the vast majority of Americans — those with a 401(k), some savings, and a desire to retire comfortably — the cost of traditional advice is prohibitive.</p>
              <div className={`${styles.callout} ${styles.gold}`} style={{ margin: '14px 0' }}>
                <p><strong>1 in 3 Americans has zero dollars saved for retirement.</strong> The biggest barrier is access. Plootus removes that barrier entirely — delivering personalized, AI-powered retirement guidance to anyone with a smartphone, at no cost.</p>
              </div>
              <div className={styles.advTags}>
                <span className={styles.advTag}>Free vs. $2,000–$10,000+/yr</span>
                <span className={styles.advTag}>Available 24/7, instant recommendations</span>
                <span className={styles.advTag}>No sales pitches or product conflicts</span>
                <span className={styles.advTag}>Can still delegate to your advisor if you have one</span>
              </div>
            </div>
          </section>

          <div className={styles.ctaBanner}>
            <h3>Your Retirement Deserves Better Than Guesswork</h3>
            <p>Join thousands of people who've used Plootus to optimize their 401(k), minimize fees, and build a clearer path to retirement — completely free.</p>
            <a onClick={() => router.push('/')} className={styles.ctaBannerBtn}>Start for Free →</a>
          </div>

          <section id="feature-table">
            <div className={styles.sectionLabel}>Feature Comparison at a Glance</div>
            <h2>How Plootus Stacks Up</h2>
            <div className={styles.featTableWrap}>
              <table className={styles.featTable}>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className={styles.plootusCol}>Plootus</th>
                    <th scope="col">Empower</th>
                    <th scope="col">Boldin</th>
                    <th scope="col">Fidelity</th>
                    <th scope="col">MaxiFi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Completely Free</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                  </tr>
                  <tr>
                    <td>401(k) Fund Recommendations</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                  </tr>
                  <tr>
                    <td>Fee / Expense Ratio Analysis</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                  </tr>
                  <tr>
                    <td>Mobile App (iOS + Android)</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                  </tr>
                  <tr>
                    <td>Retirement Income Projections</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.check}>✔</span></td>
                  </tr>
                  <tr>
                    <td>Social Security Estimator</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.check}>✔</span></td>
                  </tr>
                  <tr>
                    <td>Budget & Expense Tracking</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                  </tr>
                  <tr>
                    <td>Multi-Account Aggregation</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.check}>✔</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                  </tr>
                  <tr>
                    <td>403(b) / 457 / TSP Support</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.partial}>~</span></td>
                  </tr>
                  <tr>
                    <td>AI-Powered Personalization</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                  </tr>
                  <tr>
                    <td>No Upsell / Sales Pressure</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.check}>✔</span></td>
                  </tr>
                  <tr>
                    <td>Job Switch / Rollover Guidance</td>
                    <td className={styles.plootusCol}><span className={styles.check}>✔</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                    <td><span className={styles.partial}>~</span></td>
                    <td><span className={styles.cross}>✗</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>✔ Fully supported &nbsp;|&nbsp; ~ Partially supported or requires paid upgrade &nbsp;|&nbsp; ✗ Not available</p>
          </section>

          <section id="decision-guide">
            <div className={styles.sectionLabel}>So, Is Plootus Right for You?</div>
            <h2>The Quick Decision Guide</h2>
            <p>There's no single tool for everyone — but for most people with an employer-sponsored retirement plan, Plootus is the clear choice. Here's a quick summary:</p>
            <div className={styles.decisionGrid}>
              <div className={`${styles.decisionCard} ${styles.plootusPick}`}>
                <div className={`${styles.decisionBadge} ${styles.badgePlootus}`}>✅ Choose Plootus</div>
                <div className={styles.decisionTitle}>You want to optimize your 401(k) for free</div>
                <div className={styles.decisionRec}>Plootus is unmatched. No other free tool gives you specific, AI-powered fund recommendations for your exact employer plan — along with fee analysis, contribution guidance, and a full retirement projection.</div>
              </div>
              <div className={styles.decisionCard}>
                <div className={`${styles.decisionBadge} ${styles.badgeOther}`}>Consider Empower</div>
                <div className={styles.decisionTitle}>You want investment account tracking</div>
                <div className={styles.decisionRec}>Empower does this well. Many people use Empower alongside Plootus — Empower for tracking historical performance, Plootus for making smarter decisions going forward.</div>
              </div>
              <div className={styles.decisionCard}>
                <div className={`${styles.decisionBadge} ${styles.badgeOther}`}>Consider Boldin or MaxiFi</div>
                <div className={styles.decisionTitle}>You love detailed scenario modeling</div>
                <div className={styles.decisionRec}>Boldin or MaxiFi are worth exploring if you enjoy deep "what-if" planning. Just know you'll pay $109–$149/year for what Plootus gives you free.</div>
              </div>
              <div className={styles.decisionCard}>
                <div className={`${styles.decisionBadge} ${styles.badgeOther}`}>Consider YNAB</div>
                <div className={styles.decisionTitle}>You want month-to-month budgeting</div>
                <div className={styles.decisionRec}>YNAB remains a gold standard for zero-based budgeting. Pair it with Plootus for the retirement planning layer YNAB completely lacks.</div>
              </div>
            </div>

            <div className={styles.ctaBanner} style={{ marginTop: '32px' }}>
              <h3>Start Smart. Start Free. Start with Plootus.</h3>
              <p>Search your employer plan, get your personalized fund recommendations, and know exactly where you stand — in under a minute. No credit card. No contracts. No catch.</p>
              <a onClick={() => router.push('/')} className={styles.ctaBannerBtn}>Get My Free Retirement Plan →</a>
            </div>
          </section>

        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#vs-empower">vs. Empower</a></li>
              <li><a href="#vs-budgeting">vs. YNAB / Quicken / Monarch</a></li>
              <li><a href="#vs-fidelity">vs. Fidelity</a></li>
              <li><a href="#vs-boldin">vs. Boldin</a></li>
              <li><a href="#vs-maxifi">vs. MaxiFi</a></li>
              <li><a href="#vs-advisor-software">vs. eMoney / RightCapital</a></li>
              <li><a href="#vs-firecalc">vs. FIRECalc</a></li>
              <li><a href="#vs-pralana">vs. Pralana Gold</a></li>
              <li><a href="#vs-projectionlab">vs. Projection Lab</a></li>
              <li><a href="#vs-advisors">vs. Financial Advisors</a></li>
              <li><a href="#feature-table">Feature Table</a></li>
              <li><a href="#decision-guide">Decision Guide</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <a onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn}>
              Check Here
            </a>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><a onClick={() => router.push('/how-much-to-retire')}>How Much Do I Need to Retire?</a></li>
              <li><a onClick={() => router.push('/401k-by-age')}>401(k) Benchmarks by Age</a></li>
              <li><a onClick={() => router.push('/roth-vs-traditional')}>Roth vs. Traditional IRA</a></li>
              <li><a onClick={() => router.push('/social-security-benefits')}>Social Security Guide 2026</a></li>
              <li><a onClick={() => router.push('/retire-early')}>FIRE / Early Retirement Guide</a></li>
            </ul>
          </div>
        </aside>
      </div>
      <PartnersSection 
        titleFontSize="28px !important"
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

export default PlootusVsBestRetirementTools;
