import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Container, Typography, IconButton, CircularProgress } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from 'moment';
import useWindowDimensions from '../../lib/useWindowDimensions';
import { fetchNews as fetchNewsApi } from '../../lib/newsApi';

const BLUE_PLOOT = '#416ce1';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
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
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
    },
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: '#1A202C',
    [theme.breakpoints.up('md')]: {
      fontSize: 36,
    },
  },
  viewAllLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: BLUE_PLOOT,
    fontWeight: 600,
    fontSize: 16,
    '&:hover': {
      color: '#2D3A8C',
    },
  },
  viewAllIcon: {
    marginLeft: theme.spacing(0.5),
    fontSize: 20,
  },
  sliderContainer: {
    position: 'relative',
    overflow: 'visible',
    '& .swiper-button-prev::after, & .swiper-button-next::after': {
      display: 'none',
    },
  },
  navigationButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.06)',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  prevButton: {
    left: -16,
    [theme.breakpoints.up('md')]: { left: -20 },
  },
  nextButton: {
    right: -16,
    [theme.breakpoints.up('md')]: { right: -20 },
  },
  newsCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  newsImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    flexShrink: 0,
  },
  newsContent: {
    padding: theme.spacing(3),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  newsDate: {
    color: '#424242',
    fontSize: 14,
    marginBottom: theme.spacing(2),
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#2D3748',
    marginBottom: theme.spacing(2),
    lineHeight: 1.4,
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 400,
  },
}));

const HomeNewsSection = () => {
  const { classes } = useStyles();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const loadNews = async () => {
      try {
        const list = await fetchNewsApi();
        const sorted = list.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
        setNews(sorted);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  let slidesPerView = 3;
  if (width <= 576) slidesPerView = 1;
  else if (width <= 1024) slidesPerView = 2;

  if (loading) {
    return (
      <Box className={classes.root}>
        <Container maxWidth="lg">
          <Typography className={classes.headerTitle}>Plootus In The News</Typography>
          <Box className={classes.loaderContainer}>
            <CircularProgress style={{ color: BLUE_PLOOT }} size={40} />
          </Box>
        </Container>
      </Box>
    );
  }

  if (news.length === 0) return null;

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box className={classes.header}>
          <Typography className={classes.headerTitle}>Plootus In The News</Typography>
          <Box component="a" href="/press" className={classes.viewAllLink}>
            VIEW ALL
            <ArrowForwardIcon className={classes.viewAllIcon} />
          </Box>
        </Box>

        <Box className={classes.sliderContainer}>
          <IconButton
            className={`swiper-button-prev-news ${classes.navigationButton} ${classes.prevButton}`}
            size="large"
          >
            <ChevronLeftIcon style={{ fontSize: 22, color: '#4361EE' }} />
          </IconButton>

          <IconButton
            className={`swiper-button-next-news ${classes.navigationButton} ${classes.nextButton}`}
            size="large"
          >
            <ChevronRightIcon style={{ fontSize: 22, color: '#4361EE' }} />
          </IconButton>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={slidesPerView}
            navigation={{ prevEl: '.swiper-button-prev-news', nextEl: '.swiper-button-next-news' }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <Box
                  className={classes.newsCard}
                  onClick={() => item.link && window.open(item.link, '_blank')}
                >
                  <img
                    src={item.imageUrl || '/placeholder.png'}
                    alt={item.title}
                    className={classes.newsImage}
                  />
                  <Box className={classes.newsContent}>
                    <Typography className={classes.newsDate}>
                      {item.date ? moment(item.date).format('MMMM D, YYYY') : ''}
                    </Typography>
                    <Typography className={classes.newsTitle}>{item.title}</Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeNewsSection;
