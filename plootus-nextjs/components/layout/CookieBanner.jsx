import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Button, Link, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const delay = useMemo(() => 1500, []);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    const timer = setTimeout(() => {
      setVisible(!consent);
      setLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  const handleClose = () => setVisible(false);

  if (!visible || loading) return null;

  return (
    <Box sx={{ position: 'fixed', left: 0, right: 0, bottom: 16, zIndex: 1300 }}>
      <Box sx={{ width: '100%', px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 1.5, md: 2 },
            bgcolor: '#FFFFFF',
            borderRadius: 3,
            boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
            border: '1px solid #E5E7EB',
            p: { xs: 2, md: 2.5 },
            position: 'relative',
          }}
        >
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{
              position: { xs: 'absolute', md: 'relative' },
              top: { xs: 8, md: 'auto' },
              right: { xs: 8, md: 'auto' },
              alignSelf: { xs: 'flex-end', md: 'center' },
              mr: { md: 0.5 },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography sx={{ color: '#1E293B', fontSize: { xs: 14, md: 16 }, lineHeight: 1.6, flex: 1, width: { xs: '100%', md: 'auto' } }}>
            Plootus and its providers use web trackers such as cookies, pixels, and web beacons as described in our{' '}
            <Link href="/privacy" underline="none" sx={{ color: '#4361EE', fontWeight: 600 }}>
              privacy policy
            </Link>
            . Choose "Accept" to allow all trackers or "Decline" to only allow essential trackers. You can also{' '}
            <Link href="/privacy" underline="none" sx={{ color: '#4361EE', fontWeight: 600 }}>
              customize these preferences
            </Link>
            .
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1, md: 1.5 },
              flexShrink: 0,
              width: { xs: '100%', md: 'auto' },
              justifyContent: { xs: 'flex-end', md: 'flex-start' },
              flexWrap: { xs: 'wrap', md: 'nowrap' },
            }}
          >
            <Button
              variant="contained"
              onClick={handleAccept}
              sx={{ bgcolor: '#4361EE', '&:hover': { bgcolor: '#3651D4' }, borderRadius: 2, px: 3, flex: { xs: '1 1 48%', md: '0 0 auto' } }}
            >
              Accept
            </Button>
            <Button
              variant="outlined"
              onClick={handleDecline}
              sx={{
                borderColor: '#E5E7EB',
                color: '#1F2937',
                bgcolor: '#F9FAFB',
                borderRadius: 2,
                px: 3,
                flex: { xs: '1 1 48%', md: '0 0 auto' },
                '&:hover': { bgcolor: '#F3F4F6' },
              }}
            >
              Decline
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CookieBanner;
