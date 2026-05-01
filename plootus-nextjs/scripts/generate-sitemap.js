/**
 * Sitemap Generator for next-app
 * Adapted from PlootusMonorepo/packages/web/sitemap-generator.js
 *
 * Generates XML sitemap files into the /public directory at build time.
 * Run with: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const BASE_URL = 'https://www.plootus.com';
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://www.plootus.com/api/';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// ─── Helper ──────────────────────────────────────────────────────────────────

const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const buildUrlset = (urls) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.map(u => `  <url>\n    <loc>${BASE_URL}${u}</loc>\n  </url>`).join('\n')}
</urlset>`;

const buildSitemapIndex = (files) => `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files.map(f => `  <sitemap>\n    <loc>${BASE_URL}/${f}</loc>\n  </sitemap>`).join('\n')}
</sitemapindex>`;

const save = (filename, content) => {
  const filepath = path.join(PUBLIC_DIR, filename);
  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`  ✔  Saved ${filename}`);
};

// ─── Route Definitions (mirrored from sitemap-routes.js) ─────────────────────

const CORE_ROUTES = [
  '/',
  '/about',
  '/individual-users',
  '/financial-advisors',
  '/partners',
  '/newsletter',
  '/press',
  '/where-is-my-refund',
  '/find-old-401k',
  '/find-lost-retirement-accounts',
  '/lost-retirement-accounts',
  '/unclaimed-retirement-money',
  '/retirement-savings-lost-and-found',
  '/unclaimed-money',
  '/retirement-calculator',
  '/ai-retirement-calculator',
  '/401k-retirement-calculator',
  '/403b-retirement-calculator',
  '/457b-retirement-calculator',
  '/free-retirement-calculator',
  '/21dayfinancialchallenge',
  '/blogs',
  '/finance-101',
  '/pricing',
  '/philosophy',
  '/algorithm',
  '/security',
  '/faq',
  '/faqs',
  '/employer',
  '/401kCalculator',
  '/termsandcondition',
  '/privacy',
];

const RESOURCE_HUB_ROUTES = [
  '/401k-by-age',
  '/403b-guide',
  '/457b-plan-guide',
  '/average-403b-balance-by-age',
  '/average-ira-balance-by-age',
  '/average-monthly-expenses-by-state',
  '/average-net-worth-by-age',
  '/average-salary-by-state',
  '/average-credit-card-debt',
  '/best-states-to-retire',
  '/best-states-for-early-retirement',
  '/cheapest-states-to-retire',
  '/compound-interest-calculator',
  '/hsa-contribution-limits',
  '/inflation-retirement-calculator',
  '/medicare-supplement-medigap-comparison',
  '/retirement-income-calculator',
  '/retirement-savings-gap-gender-race',
  '/tsp-thrift-savings-plan-guide',
  '/healthcare-costs-in-retirement',
  '/how-much-to-retire',
  '/how-to-plan-retirement',
  '/retirement-statistics-2026',
  '/social-security-benefits',
  '/retire-early',
  '/roth-vs-traditional',
  '/tax-friendly-states-for-retirees',
  '/plootus-vs-best-retirement-tools',
  '/cost-of-raising-child-by-state',
  '/childcare-costs',
  '/tool-state-comparison',
  '/health-insurance-costs',
  '/long-term-care-costs',
  '/median-household-income',
  '/minimum-wage-by-state',
  '/rent-by-city',
  '/average-savings-by-age',
  '/average-student-loan-debt',
  '/rmd-calculator',
  '/social-security-calculator',
  '/federal-income-tax-brackets',
  '/standard-deduction-2026',
  '/capital-gains-tax-rates',
  '/ira-contribution-limits',
  '/tax-loss-harvesting',
  '/roth-conversion-strategy',
  '/social-security-tax-calculator',
  '/retirement-tax-guide',
  '/retirement-planning-in-your-30s',
  '/retirement-planning-in-your-40s',
  '/retirement-planning-in-your-50s',
  '/switching-jobs-401k',
  '/divorce-and-retirement',
  '/estate-planning-basics',
  '/medicare-guide',
  '/backdoor-roth-ira',
  '/self-employed-retirement-plans',
  '/retirement-guide',
];

// ─── Main Generator ──────────────────────────────────────────────────────────

async function generateSitemaps() {
  const sitemapFiles = [];

  // 1. Core Sitemap
  console.log('\n[1/6] Generating Core Sitemap...');
  save('sitemap_core.xml', buildUrlset(CORE_ROUTES));
  sitemapFiles.push('sitemap_core.xml');

  // 2. Blogs Sitemap
  console.log('\n[2/6] Fetching Blogs...');
  let blogUrls = ['/blogs'];
  try {
    const res = await axios.get(`${API_BASE}blog/getAll`);
    const blogs = res.data?.blogs || res.data || [];
    console.log(`  Found ${blogs.length} blogs.`);
    blogs.forEach(b => {
      const slug = encodeURIComponent(b.slug || slugify(b.heading) || String(b.id));
      if (slug) blogUrls.push(`/blogs/${slug}`);
    });
  } catch (err) {
    console.warn('  ⚠  Could not fetch blogs:', err.message);
    console.warn('  → Using /blogs index only as fallback.');
  }
  save('sitemap_blogs.xml', buildUrlset(blogUrls));
  sitemapFiles.push('sitemap_blogs.xml');

  // 3. Newsletters Sitemap
  console.log('\n[3/6] Fetching Newsletters...');
  let newsletterUrls = [];
  try {
    const res = await axios.get(`${API_BASE}newsletter/getAll`);
    const newsletters = res.data?.newsletters || [];
    console.log(`  Found ${newsletters.length} newsletters.`);
    newsletters.forEach(n => {
      const slug = encodeURIComponent(n.slug || slugify(n.heading) || String(n.id));
      if (slug) newsletterUrls.push(`/newsletters/${slug}`);
    });
  } catch (err) {
    console.warn('  ⚠  Could not fetch newsletters:', err.message);
  }
  save('sitemap_newsletters.xml', buildUrlset(newsletterUrls));
  sitemapFiles.push('sitemap_newsletters.xml');

  // 4. Employers Sitemaps (401k & 403b)
  console.log('\n[4/6] Fetching Employer URLs...');
  const CHUNK_SIZE = 5000;
  let employers401k = [];
  let employers403b = [];

  try {
    const res = await axios.get(`${API_BASE}public401k/urls/all`);
    employers401k = res.data?.urls || [];
    console.log(`  Found ${employers401k.length} 401k employers.`);
  } catch (err) {
    console.warn('  ⚠  Could not fetch 401k employers:', err.message);
  }

  try {
    const res = await axios.get(`${API_BASE}public403b/urls/all`);
    employers403b = res.data?.urls || [];
    console.log(`  Found ${employers403b.length} 403b employers.`);
  } catch (err) {
    console.warn('  ⚠  Could not fetch 403b employers:', err.message);
  }

  // Generate chunked 401k sitemaps
  if (employers401k.length > 0) {
    for (let i = 0; i < employers401k.length; i += CHUNK_SIZE) {
      const chunk = employers401k.slice(i, i + CHUNK_SIZE);
      const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
      const filename = `sitemap_employers_401k_${chunkIndex}.xml`;
      const urls = chunk.map(emp => `/401k/${emp.url}`);
      save(filename, buildUrlset(urls));
      sitemapFiles.push(filename);
    }
  } else {
    // Fallback empty
    save('sitemap_employers_401k_1.xml', buildUrlset([]));
    sitemapFiles.push('sitemap_employers_401k_1.xml');
  }

  // Generate chunked 403b sitemaps
  if (employers403b.length > 0) {
    for (let i = 0; i < employers403b.length; i += CHUNK_SIZE) {
      const chunk = employers403b.slice(i, i + CHUNK_SIZE);
      const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
      const filename = `sitemap_employers_403b_${chunkIndex}.xml`;
      const urls = chunk.map(emp => `/403b/${emp.url}`);
      save(filename, buildUrlset(urls));
      sitemapFiles.push(filename);
    }
  } else {
    save('sitemap_employers_403b_1.xml', buildUrlset([]));
    sitemapFiles.push('sitemap_employers_403b_1.xml');
  }

  // 5. Resource Hub Sitemap
  console.log('\n[5/6] Generating Resource Hub Sitemap...');
  save('sitemap_resource_hub.xml', buildUrlset(RESOURCE_HUB_ROUTES));
  sitemapFiles.push('sitemap_resource_hub.xml');

  // 6. Sitemap Index + main sitemap.xml
  console.log('\n[6/6] Generating Sitemap Index...');
  const indexXml = buildSitemapIndex(sitemapFiles);
  save('sitemap_index.xml', indexXml);
  save('sitemap.xml', indexXml); // backward compat

  console.log('\n✅  All sitemaps generated successfully!\n');
}

generateSitemaps().catch(err => {
  console.error('Fatal error during sitemap generation:', err);
  process.exit(1);
});
