import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
  typography: {
    fontFamily: '"Inter", "DM Sans", -apple-system, sans-serif',
  },
});

import { Provider } from 'react-redux';
import { store } from '../lib/store';

const GOOGLE_CLIENT_ID = "489405425763-cghs67b7r4ein9iimqaunnaip8j4h05d.apps.googleusercontent.com";

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </GoogleOAuthProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

