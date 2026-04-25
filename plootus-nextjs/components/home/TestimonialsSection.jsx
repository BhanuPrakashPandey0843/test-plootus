import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
      padding: 0,
    },
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#1A202C',
    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
    },
  },
  swiperContainer: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(-3),
      marginRight: theme.spacing(-3),
    },
    '& .swiper-wrapper': {
      alignItems: 'stretch',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    },
    '& .swiper-slide': {
      height: 'auto',
      maxWidth: '85%',
      [theme.breakpoints.up('md')]: {
        maxWidth: '48%',
      },
    },
    '& .swiper-pagination-bullet': {
      width: 8,
      height: 8,
      backgroundColor: '#E2E8F0',
      opacity: 1,
    },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: '#4361EE',
    },
  },
  testimonialCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: '16px',
    padding: theme.spacing(3),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    },
  },
  quoteMark: {
    position: 'absolute',
    top: theme.spacing(3),
    left: theme.spacing(3),
    color: '#E2E8F0',
    fontSize: '64px',
    fontFamily: 'Georgia, serif',
    lineHeight: 1,
    opacity: 0.5,
    userSelect: 'none',
  },
  testimonialContent: {
    color: '#4A5568',
    fontSize: '16px',
    lineHeight: 1.7,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    position: 'relative',
    zIndex: 1,
    flex: 1,
  },
  testimonialAuthor: {
    color: '#424242',
    fontSize: '16px',
    fontStyle: 'italic',
    textAlign: 'right',
    width: '100%',
    marginTop: 'auto',
  },
}));

const testimonials = [
  {
    id: 1,
    content:
      'Fantastic work! Focused on 401k. Plootus provides best investment options from 401k plan without paying anything to financial advisors. The app also allows me to link my accounts and I can see all my expenses income, assets and liabilities at one place.',
    author: '- Gmel Bourne',
  },
  {
    id: 2,
    content:
      'An easy to use app with a smooth, user friendly UI. It allows user to link their account and get detailed information on income, expenses, asset, and liabilities. It focuses on 401K plans to increase ROI from investments, through AI enabled technology.',
    author: '- Deep Bhowmick',
  },
  {
    id: 3,
    content:
      "Much easier thank employer rolls. The app calculates the future expenses for retirement period. It requires minimum inputs. The best part is it's free right now and helps you choose the best of investments 403b account.",
    author: '- Kyle Johnson',
  },
  {
    id: 4,
    content:
      'A dynamic, artificial intelligence based application that helps the user calculate their funds, pensions and allocations by syncing itself with the users account. A highly accessible way to plan your retirement with all the required information at one place.',
    author: '- J B',
  },
];

const TestimonialsSection = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box className={classes.header}>
          <Typography className={classes.headerTitle}>What Our Users Say!</Typography>
        </Box>

        <Box className={classes.swiperContainer}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Box className={classes.testimonialCard}>
                  <Box component="span" className={classes.quoteMark}>"</Box>
                  <Typography className={classes.testimonialContent}>{testimonial.content}</Typography>
                  <Typography className={classes.testimonialAuthor}>{testimonial.author}</Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
