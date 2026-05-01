import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import HubNav from '../HubNav/HubNav';
import PartnerCard from './PartnerCard';
import styles from './PartnerCard.module.css';

const useStyles = makeStyles()((theme) => ({
  heroSection: {
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(0, 0, 4),
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(3),
    },
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#4361EE',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.125rem',
    color: '#64748B',
    maxWidth: '980px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
}));

const partners = [
  {
    logo: '/images/partners/zebra-logo.png',
    logoAlt: 'Zebra logo',
    description:
      "Finding the right coverage shouldn't be a hassle. Our partners at The Zebra combine a lightning-fast online comparison tool with an expansive network of in-house insurance experts to help you make the best choice. While you can easily pull side-by-side quotes online, what truly sets them apart is their dedicated team of licensed, unbiased advisors. With unparalleled industry knowledge, their agents are ready to walk you through your auto and home options, providing objective advice to ensure you never overpay for the coverage you actually need.",
    link: 'https://www.thezebra.com/plootus/?utm_source=plootus&utm_medium=partnership-strategic&channelid=3rvje1&subid2={{page}}',
    hyperlinkText: 'https://www.thezebra.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/insurify.jpg',
    logoAlt: 'Insurify logo',
    description:
      'Looking for the best insurance coverage at the best price? Our partners at Insurify, the highest-rated virtual insurance agent in the U.S., make it easy to compare real-time, personalized insurance quotes—all in one place. Shop online or speak with a licensed agent to find affordable auto, home, and other insurance options tailored to your needs, helping you save money quickly and confidently.',
    link: 'https://insurify.com/start/auto/partner/plootus/?utm_source=plootus&utm_medium=auto&utm_campaign=Website&utm_content=Partnerspage',
    hyperlinkText: 'https://insurify.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/policy-genius-logo.png',
    logoAlt: 'Policy genius logo',
    description:
      "Getting life insurance coverage can be simple and stress-free. Our partners at Policygenius make it easy to compare personalized quotes from top insurers—all in one place. Their simple online platform and licensed experts help you understand your options, choose the right policy for your needs, and secure financial protection for your loved ones with confidence. Whether you're buying coverage for the first time or reviewing an existing policy, Policygenius makes the process straightforward and seamless. They also offer tools to compare other coverage, including auto insurance, so you can manage more of your protection in one place.",
    link: 'https://policygenius.go2cloud.org/aff_c?offer_id=825&aff_id=2280',
    hyperlinkText: 'policygenius.com',
    infoPrefix: 'For life insurance coverage, visit ',
    rightBelow: (
      <Typography className={styles['partner-link-text']}>
        <span>For car insurance quotes, visit </span>
        <Link
          href="https://visit.policygenius.com/auto-insurance-quotes/plootus/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['partner-link']}
        >
          policygenius.com
        </Link>
        <span>.</span>
      </Typography>
    ),
  },
  {
      logo: '/images/partners/ID-watchdog-by-equifax.jpg',
      logoAlt: 'ID Watchdog logo',
      description: "Identity theft is no longer a possibility—it’s a probability. In 2024 alone, identity fraud cost Americans $47 billion, impacting 18 million adults. Through our partners at ID Watchdog from Equifax, you and your family can enjoy greater peace of mind with award-winning protection. This includes lock and block features, credit alerts to help prevent unauthorized access, dark web and phishing monitoring, and family protection tools such as child credit lock. Protect yourself and your family with identity theft insurance and support from certified restoration specialists. Don’t face fraud alone.",
      link:
        'https://www.idwatchdog.com/myplan/plootus',
      hyperlinkText: 'https://www.idwatchdog.com ',
      infoPrefix: 'For more information and 20% off the price, visit ',
    },
  {
    logo: '/images/partners/engine_by_moneylion_black.png',
    logoAlt: 'Engine by MoneyLion logo',
    description: (
      <>
        <strong>CREDIT CARDS - </strong>
        Looking to explore new credit card options? Our partners at Engine by MoneyLion help you shop
        and compare credit card offers from a network of financial institutions in one convenient place.
        With a simple online process, you can review options tailored to your financial profile and
        choose the card that fits your needs. You can explore available offers through Engine with no
        impact to your credit score, making it easier to compare features before moving forward. Engine
        by MoneyLion is a marketplace platform and does not offer products directly to consumers.
      </>
    ),
    link: 'https://www.moneylion.com/network/plootus/credit-cards/explore?tag.campaignId=Partners',
    hyperlinkText: 'www.moneylion.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/engine_by_moneylion_black.png',
    logoAlt: 'Engine by MoneyLion logo',
    description: (
      <>
        <strong>HIGH-YIELD SAVINGS - </strong>
        Looking for a way to grow your savings? Our partners at Engine by MoneyLion help you shop and
        compare high-yield savings account offers from a network of financial institutions. Their simple
        comparison experience allows you to review available options and choose a savings account that
        fits your financial goals. By bringing multiple savings offers together in one place, Engine by
        MoneyLion helps you evaluate options and make informed decisions about where to keep and grow
        your savings. Engine by MoneyLion is a marketplace platform and does not offer products directly
        to consumers.
      </>
    ),
    link: 'https://www.moneylion.com/network/plootus/banking/explore?tag.campaignId=Partners',
    hyperlinkText: 'www.moneylion.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/engine_by_moneylion_black.png',
    logoAlt: 'Engine by MoneyLion logo',
    description: (
      <>
        <strong>PERSONAL LOANS - </strong>
        Looking for a flexible way to manage expenses or consolidate balances? Our partners at Engine by
        MoneyLion make it easy to shop and compare personalized personal loan offers from a network of
        financial institutions—all in one place. With one form and possibly multiple offers, you can
        review loan options tailored to your financial profile. Offers can be viewed through Engine with
        no impact to your credit score, and some lenders may provide funds as soon as the next business
        day, depending on eligibility. Loan rates typically range between 5.99%–35.99% APR based on
        your credit profile, and many loans require no collateral. Engine by MoneyLion is a marketplace
        platform and does not offer products directly to consumers.
      </>
    ),
    link: 'https://www.moneylion.com/network/plootus/loans/search?tag.campaignId=Partners',
    hyperlinkText: 'www.moneylion.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/upgrade-logo.png',
    logoAlt: 'Upgrade logo',
    description:
      'Looking for a flexible way to manage debt or cover important expenses? Our partners at Upgrade offer personal loans that can help you refinance high-interest credit cards, consolidate multiple balances into one simple monthly payment, fund home improvements, make major purchases with a fixed-rate loan, or cover unexpected expenses like car or home repairs. You can borrow with a low, fixed rate and affordable monthly payments, with no prepayment fees and a fast, easy online application process. Upgrade makes it simple to access the funds you need while staying in control of your financial goals.',
    link: 'https://upgrade.ywhcc7.net/0GJeyR',
    hyperlinkText: 'www.upgrade.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/liberty-tax-logo.jpg',
    logoAlt: 'Liberty Tax logo',
    description:
      'Need help with taxes or dealing with IRS issues? Our partners at Liberty Tax offer professional tax preparation and support to help you file accurately, maximize your refund, and stay compliant with confidence. You can file your taxes online or set up an appointment to visit one of their offices for in-person support. Whether your taxes are simple or complex, Liberty Tax provides trusted guidance from experienced tax professionals - so you can get the help you need, your way.',
    link: 'https://www.tkqlhce.com/click-101203773-13650957',
    hyperlinkText: 'https://www.libertytax.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/ezTaxReturn-logo.png',
    logoAlt: 'EZ Tax Return logo',
    description:
      'Need a simple way to file your taxes online? Our partners at EZTaxReturn.com provide an easy, step-by-step platform that helps you prepare and e-file your federal and state returns quickly and accurately. Their user-friendly system guides you through the process, checks for common errors, and helps you claim eligible credits and deductions so you can maximize your refund with confidence. Whether you have a straightforward return or more detailed tax needs, EZTaxReturn.com makes filing fast, secure, and stress-free from any device.',
    link: 'https://www.kqzyfj.com/click-101203773-15719582',
    hyperlinkText: 'https://www.eztaxreturn.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/tax1099.png',
    logoAlt: 'Tax 1099 logo',
    description:
      'Need a faster, more accurate way to file 1099s, W-2s, and other tax forms? Our partners at Tax1099 provide an IRS-authorized eFiling platform that automates form preparation, bulk uploads, error checks, and real-time TIN matching to help reduce compliance risk and administrative workload. With seamless integrations into tools like QuickBooks, Xero, and Bill.com, Tax1099 scales from freelancers to enterprises and supports high-volume filings with built-in audit trails and secure processing. File confidently, stay compliant, and save time with a trusted solution used by over 500,000 businesses.',
    link: 'https://get.tax1099.com/5k7bbwvfhug4-ptmtk',
    hyperlinkText: 'https://www.tax1099.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/e-file.jpg',
    logoAlt: 'E-File logo',
    description:
      'Need help filing your taxes quickly and accurately? Our partners at E-File.com make it easy to prepare and submit your federal and state tax returns online with confidence. Their secure, user-friendly platform guides you step-by-step through the filing process to help ensure accuracy and maximize your refund. Whether you have a straightforward return or more detailed tax needs, E-File.com provides helpful tools and support resources to simplify the process. File from anywhere, on your schedule, and get the peace of mind that comes with a trusted online tax filing solution.',
    link: 'https://www.kqzyfj.com/click-101203773-11917170',
    hyperlinkText: 'https://www.e-file.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/sky-blue.jpg',
    logoAlt: 'Sky Blue Credit logo',
    description:
      "Looking to improve your credit? Our partners at Sky Blue Credit offer personalized credit repair services designed to help you take control of your financial future. Their team works with you to review your credit reports, identify inaccurate or outdated information, and dispute items that may be impacting your score. With a simple, transparent process and ongoing support, Sky Blue Credit helps you better understand your credit and build a stronger financial foundation. Whether you're preparing for a major purchase or simply want to improve your credit health, they provide trusted guidance every step of the way.",
    link: 'https://www.dpbolvw.net/click-101203773-15167974',
    hyperlinkText: 'https://www.skyblueeducate.com',
    infoPrefix: 'For more information, visit ',
  },
  {
    logo: '/images/partners/nfcc.png',
    logoAlt: 'NFCC logo',
    description:
      'Facing Financial Challenges? Our partners at the National Foundation for Credit Counseling (NFCC), provide non-profit credit counseling services to help you chart a safe and affordable path to financial health. Connect to counseling for your no-obligation financial assessment at NFCC.org/Plootus. Take the first step toward freedom from debt—with expert help, proven tools, and a plan made for you. Click or call to schedule a complimentary financial review with a non-profit credit counselor.',
    link: 'https://nfcc.org/Plootus',
    hyperlinkText: 'NFCC.org/Plootus',
    infoPrefix: 'For more information, visit ',
  },
];

const PartnersPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <HubNav />
      <Box className={styles['partners-container']}>
        <Box className={classes.heroSection}>
          <Container maxWidth="lg">
            <Typography variant="h1" className={classes.heroTitle}>
              More ways to cut costs and grow your wealth!
            </Typography>
            <Typography className={classes.heroSubtitle}>
              Plootus collaborates with select platforms to help you compare, save, and manage your
              money more efficiently.
            </Typography>
          </Container>
        </Box>

        <Container className={styles['partners-content']} maxWidth="lg">
          <Box className={styles['partners-header']}>
            <hr className={styles['partners-divider']} />
          </Box>

          <Box>
            {partners.map((partner, index) => (
              <PartnerCard
                key={index}
                logo={partner.logo}
                logoAlt={partner.logoAlt}
                description={partner.description}
                link={partner.link}
                hyperlinkText={partner.hyperlinkText}
                infoPrefix={partner.infoPrefix}
                rightBelow={partner.rightBelow}
                showDivider={index < partners.length - 1}
              />
            ))}
            <hr className={styles['partners-divider']} />
            <Box className={styles['disclaimer']}>
              <Typography className={styles['disclaimer-text']}>
                Disclaimer: Plootus (an SEC-registered investment advisor) may receive compensation for
                referrals to third-party products and services, listed on our Partners page. These
                referrals are for informational purposes only and do not constitute an endorsement or
                recommendation. Plootus has not conducted due diligence on, nor assumes responsibility
                for, any third-party offerings. Users are encouraged to evaluate these options
                independently before making any decisions.
              </Typography>
            </Box>
            <hr className={styles['partners-divider']} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PartnersPage;
