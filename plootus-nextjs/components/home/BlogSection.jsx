import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Container, Typography, IconButton, CircularProgress } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import useWindowDimensions from '../../lib/useWindowDimensions';
import { fetchBlogs as fetchBlogsApi } from '../../lib/blogsApi';

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
    [theme.breakpoints.up('md')]: {
      left: -20,
    },
  },
  nextButton: {
    right: -16,
    [theme.breakpoints.up('md')]: {
      right: -20,
    },
  },
  blogCard: {
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
  blogImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    flexShrink: 0,
  },
  blogContent: {
    padding: theme.spacing(3),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  blogDate: {
    color: '#424242',
    fontSize: 14,
    marginBottom: theme.spacing(2),
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#2D3748',
    marginBottom: theme.spacing(2),
    lineHeight: 1.4,
  },
  blogDescription: {
    color: '#424242',
    fontSize: 14,
    lineHeight: 1.6,
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 400,
  },
}));

const BlogSection = () => {
  const { classes } = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const list = await fetchBlogsApi();
        const formatted = list.slice(0, 6).map((b) => ({
          id: b.id,
          slug: b.slug,
          title: b.title,
          excerpt: b.excerpt,
          image: b.image || '/placeholder.png',
          date: b.date,
          link: b.link || null,
        }));
        setBlogs(formatted);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  let slidesPerView = 3;
  if (width <= 576) slidesPerView = 1;
  else if (width <= 1024) slidesPerView = 2;

  const extractExcerpt = (text) =>
    (text || '').length > 150 ? (text || '').slice(0, 150) + '...' : text || '';

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  if (loading) {
    return (
      <Box className={classes.root}>
        <Container maxWidth="lg" disableGutters>
          <Typography className={classes.headerTitle}>Read Our Blogs</Typography>
          <Box className={classes.loaderContainer}>
            <CircularProgress style={{ color: BLUE_PLOOT }} size={40} />
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" disableGutters>
        <Box className={classes.header}>
          <Typography className={classes.headerTitle}>Read Our Blogs</Typography>
          <Box
            component="a"
            href="/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.viewAllLink}
          >
            VIEW ALL
            <ArrowForwardIcon className={classes.viewAllIcon} />
          </Box>
        </Box>

        <Box className={classes.sliderContainer}>
          <IconButton
            className={`swiper-button-prev ${classes.navigationButton} ${classes.prevButton}`}
            size="large"
          >
            <ChevronLeftIcon style={{ fontSize: 22, color: '#4361EE' }} />
          </IconButton>

          <IconButton
            className={`swiper-button-next ${classes.navigationButton} ${classes.nextButton}`}
            size="large"
          >
            <ChevronRightIcon style={{ fontSize: 22, color: '#4361EE' }} />
          </IconButton>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={slidesPerView}
            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Box className={classes.blogCard} onClick={() => router.push(`/blogs/${blog.slug}`)}>
                  <Box component="img" src={blog.image} alt={blog.title} className={classes.blogImage} />
                  <Box className={classes.blogContent}>
                    <Typography className={classes.blogDate}>{formatDate(blog.date)}</Typography>
                    <Typography className={classes.blogTitle}>{blog.title}</Typography>
                    <Typography className={classes.blogDescription}>{extractExcerpt(blog.excerpt)}</Typography>
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

export default BlogSection;
