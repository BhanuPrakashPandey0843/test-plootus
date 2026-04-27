import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Swiper CSS is imported globally in _app.jsx

const partners = [
  {
    id: 1,
    name: 'The Zebra',
    logo: '/images/partners/zebra-logo.png',
    text: 'Compare insurance quotes instantly and choose the right coverage.',
    link: 'https://www.thezebra.com/plootus/?utm_source=plootus&utm_medium=partnership-strategic&channelid=3rvje1&subid2={{page}}',
  },
  {
    id: 2,
    name: 'Insurify',
    logo: '/images/partners/insurify.jpg',
    text: 'Compare real-time, personalized insurance quotes—all in one place',
    link: 'https://insurify.com/start/auto/partner/plootus/?utm_source=plootus&utm_medium=auto&utm_campaign=Website&utm_content=Partnerspage',
  },
  {
    id: 3,
    name: 'Policygenius Life',
    logo: '/images/partners/policy-genius-logo.png',
    text: (
      <span>
        <strong>Life Insurance - </strong>Compare personalized life insurance quotes and choose the right coverage.
      </span>
    ),
    link: 'https://policygenius.go2cloud.org/aff_c?offer_id=825&aff_id=2280',
  },
  {
    id: 4,
    name: 'Policygenius Auto',
    logo: '/images/partners/policy-genius-logo.png',
    text: (
      <span>
        <strong>Auto Insurance - </strong>Compare personalized auto insurance quotes and choose the right coverage
      </span>
    ),
    link: 'https://visit.policygenius.com/auto-insurance-quotes/plootus/',
  },
  {
    id: 5,
    name: 'Engine by MoneyLion (Credit Cards)',
    logo: '/images/partners/engine_by_moneylion_black.png',
    text: (
      <span>
        <strong>Credit Cards - </strong>Compare credit card offers with no impact to your credit score.
      </span>
    ),
    link: 'https://www.moneylion.com/network/plootus/credit-cards/explore?tag.campaignId=Partners',
  },
  {
    id: 6,
    name: 'Engine by MoneyLion (High-Yield Savings)',
    logo: '/images/partners/engine_by_moneylion_black.png',
    text: (
      <span>
        <strong>High-Yield Savings - </strong>Compare high-yield savings account offers to help your money grow.
      </span>
    ),
    link: 'https://www.moneylion.com/network/plootus/banking/explore?tag.campaignId=Partners',
  },
  {
    id: 7,
    name: 'Engine by MoneyLion (Personal Loans)',
    logo: '/images/partners/engine_by_moneylion_black.png',
    text: (
      <span>
        <strong>Personal Loan - </strong>Compare personalized personal loan offers with no credit impact.
      </span>
    ),
    link: 'https://www.moneylion.com/network/plootus/loans/search?tag.campaignId=Partners',
  },
  {
    id: 8,
    name: 'Upgrade',
    logo: '/images/partners/upgrade-logo.png',
    text: 'Access personal loans to consolidate debt or cover major expenses.',
    link: 'https://upgrade.ywhcc7.net/0GJeyR',
  },
  {
    id: 9,
    name: 'Liberty Tax',
    logo: '/images/partners/liberty-tax-logo.jpg',
    text: 'Get expert help to file taxes accurately and maximize your refund.',
    link: 'https://www.tkqlhce.com/click-101203773-13650957',
  },
  {
    id: 10,
    name: 'EZ Tax Return',
    logo: '/images/partners/ezTaxReturn-logo.png',
    text: 'File federal and state taxes quickly with a simple online platform.',
    link: 'https://www.kqzyfj.com/click-101203773-15719582',
  },
  {
    id: 11,
    name: 'Tax 1099',
    logo: '/images/partners/tax1099.png',
    text: 'E-file 1099s, W-2s, and other tax forms quickly and securely.',
    link: 'https://get.tax1099.com/5k7bbwvfhug4-ptmtk',
  },
  {
    id: 12,
    name: 'E-File',
    logo: '/images/partners/e-file.jpg',
    text: 'Prepare and e-file your taxes with a simple guided platform.',
    link: 'https://www.kqzyfj.com/click-101203773-11917170',
  },
  {
    id: 13,
    name: 'Sky Blue',
    logo: '/images/partners/sky-blue.jpg',
    text: 'Improve your credit with personalized credit repair support.',
    link: 'https://www.dpbolvw.net/click-101203773-15167974',
  },
  {
    id: 14,
    name: 'NFCC',
    logo: '/images/partners/nfcc.png',
    text: 'Get nonprofit counseling and guidance to manage debt and finances.',
    link: 'https://nfcc.org/Plootus',
  },
];

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(4.5, 0),
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },
  secLabel: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: '#3B5FDB',
    marginBottom: 11,
    textAlign: 'center',
    display: 'block',
    width: '100%',
  },
  title: {
    fontWeight: 800,
    color: '#1A2B4A',
    marginBottom: theme.spacing(2),
    lineHeight: 1.15,
    textAlign: 'center',
    display: 'block',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    width: '100%',
    margin: '0 auto',
    lineHeight: 1.8,
    marginBottom: theme.spacing(6),
    textAlign: 'center',
    display: 'block',
  },
  platformLink: {
    color: '#3B5FDB',
    textDecoration: 'underline',
    fontWeight: 600,
    '&:hover': {
      color: '#2D4AC2',
    },
  },
  swiperContainer: {
    padding: theme.spacing(2, 6),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 0),
    },
    '& .swiper-pagination-bullet': {
      width: 10,
      height: 10,
      backgroundColor: '#E2E8F0',
      opacity: 1,
    },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: '#4361EE',
    },
    '& .swiper-button-next, & .swiper-button-prev': {
      color: '#4361EE',
      backgroundColor: '#FFFFFF',
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      '&::after': {
        fontSize: '18px',
        fontWeight: 'bold',
      },
      '&:hover': {
        backgroundColor: '#F8FAFC',
        boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.15)',
      },
    },
    '& .swiper-button-next': {
      right: '10px',
      [theme.breakpoints.down('sm')]: {
        right: '5px',
      },
    },
    '& .swiper-button-prev': {
      left: '10px',
      [theme.breakpoints.down('sm')]: {
        left: '5px',
      },
    },
  },
  partnerCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: '12px',
    padding: theme.spacing(2, 4, 4, 4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '280px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.05)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 2, 4, 2),
      margin: theme.spacing(0, 1),
    },
  },
  logoContainer: {
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: theme.spacing(1),
    border: '1px solid transparent',
    transition: 'border-color 0.3s ease',
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  partnerText: {
    fontSize: '1.125rem',
    color: '#1E293B',
    lineHeight: 1.5,
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disclaimer: {
    fontSize: '0.875rem',
    color: '#94A3B8',
    width: '100%',
    marginTop: theme.spacing(2),
    lineHeight: 1.6,
    textAlign: 'center',
  },
}));

const PartnersSection = ({
  isAboutPage = false,
  titleDisabled = false,
  titleFontSize,
  titleFontWeight,
  titleColor,
  titleLineHeight,
  titleLetterSpacing,
  subtitleFontSize,
  subtitleColor,
  platformLinkColor,
  rootPadding,
}) => {
  const { classes } = useStyles();

  const titleStyle = {
    fontSize: titleFontSize || (isAboutPage ? 'clamp(1.85rem, 3vw, 2.6rem)' : '2.5rem'),
    fontWeight: titleFontWeight || (isAboutPage ? 800 : 700),
    color: titleColor || (isAboutPage ? '#1A2B4A' : '#4361EE'),
    lineHeight: titleLineHeight || (isAboutPage ? 1.15 : 1.2),
    letterSpacing: titleLetterSpacing || (isAboutPage ? '-0.4px' : 'normal'),
  };

  const subtitleStyle = {
    fontSize: subtitleFontSize || (isAboutPage ? '0.95rem' : '1.125rem'),
    color: subtitleColor || (isAboutPage ? '#444F5E' : '#64748B'),
    lineHeight: isAboutPage ? 1.8 : 1.6,
  };

  const rootStyle = rootPadding ? { padding: rootPadding } : {};

  return (
    <Box className={`${classes.root} ${isAboutPage ? 'reveal' : ''}`} style={rootStyle}>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        {!titleDisabled && (
          <>
            {isAboutPage && (
              <div className={classes.secLabel} style={{ textAlign: 'center', width: '100%', display: 'block' }}>
                Our Partners
              </div>
            )}
            <Typography className={classes.title} align="center" style={{ ...titleStyle, textAlign: 'center', width: '100%' }}>
              More ways to cut costs and grow your wealth!
            </Typography>
            <Typography className={classes.subtitle} align="center" style={{ ...subtitleStyle, textAlign: 'center', width: '100%', margin: '0 auto' }}>
              Plootus collaborates with select{' '}
              <Link href="/partners" className={classes.platformLink} style={{ color: platformLinkColor || (isAboutPage ? '#3B5FDB' : '#4361EE') }}>
                platforms
              </Link>{' '}
              to help you compare, save, and manage your money more efficiently.
            </Typography>
          </>
        )}

        <Box className={classes.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide key={`${partner.id}-${partner.name}`}>
                <Box
                  component="a"
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.partnerCard}
                >
                  <Box className={classes.logoContainer}>
                    <img src={partner.logo} alt={partner.name} className={classes.logo} />
                  </Box>
                  <Typography className={classes.partnerText}>
                    {partner.text}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Typography className={classes.disclaimer}>
          Disclaimer: Plootus (an SEC-registered investment advisor) may receive compensation for referrals to third-party products and services, listed on our Partners page. These referrals are for informational purposes only and do not constitute an endorsement or recommendation. Plootus has not conducted due diligence on, nor assumes responsibility for, any third-party offerings. Users are encouraged to evaluate these options independently before making any decisions.
        </Typography>
      </Container>
    </Box>
  );
};

export default PartnersSection;
