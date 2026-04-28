import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles()((theme, _params, classes) => ({
  root: {
    padding: theme.spacing(0, 0, 4),
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
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
      '&:after': {
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
      [`& .${classes.logoContainer}`]: {
        borderColor: '#4361EE',
      },
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
}));

const partners = [
  {
    id: 1,
    name: 'Insurify',
    logo: '/images/partners/Insurify.jpg',
    text: 'Compare real-time, personalized insurance quotes—all in one place',
    link: 'https://insurify.com/start/auto/partner/plootus/?utm_source=plootus&utm_medium=auto&utm_campaign=Website&utm_content=Partnerspage',
  },
  {
    id: 2,
    name: 'The Zebra',
    logo: '/images/partners/zebra-logo.png',
    text: 'Compare insurance quotes instantly and choose the right coverage.',
    link: 'https://www.thezebra.com/plootus/?utm_source=plootus&utm_medium=partnership-strategic&channelid=3rvje1',
  },
  {
    id: 3,
    name: 'Upgrade',
    logo: '/images/partners/upgrade-logo.png',
    text: 'Access personal loans to consolidate debt or cover major expenses.',
    link: 'https://upgrade.ywhcc7.net/0GJeyR',
  },
  {
    id: 8,
    name: 'sky blue',
    logo: '/images/partners/sky-blue.jpg',
    text: 'Improve your credit with personalized credit repair support.',
    link: 'https://www.dpbolvw.net/click-101203773-15167974',
  },
  {
    id: 9,
    name: 'nfcc',
    logo: '/images/partners/nfcc.png',
    text: 'Get nonprofit counseling and guidance to manage debt and finances.',
    link: 'https://nfcc.org/Plootus',
  },
];

const PartnersCarousel = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box className={classes.swiperContainer}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
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
      </Container>
    </Box>
  );
};

export default PartnersCarousel;
