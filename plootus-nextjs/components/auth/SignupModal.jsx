import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  IconButton, 
  Typography, 
  Box, 
  Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SignupModal = ({ isOpen, onClose, onLoginOpen }) => {
  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: { borderRadius: 12, padding: '20px' }
      }}
    >
      <Box sx={{ position: 'relative', py: 2 }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        
        <Box sx={{ textAlign: 'center', mb: 4, mt: 2 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: '#1e293b', mb: 2 }}>
            Get Started with Plootus
          </Typography>
          <Typography variant="h6" sx={{ color: '#64748b', fontWeight: 400, px: 4 }}>
            Take the first step towards a more secure financial future.
          </Typography>
        </Box>

        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ 
                py: 2, 
                borderRadius: '10px', 
                backgroundColor: '#4361ee',
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: 600,
                '&:hover': { backgroundColor: '#3651d1' }
              }}
            >
              Sign Up as Individual User
            </Button>
            
            <Button
              fullWidth
              variant="outlined"
              sx={{ 
                py: 2, 
                borderRadius: '10px', 
                borderColor: '#4361ee',
                color: '#4361ee',
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: 600,
                borderWidth: '2px',
                '&:hover': { borderWidth: '2px', backgroundColor: '#f8fafc' }
              }}
            >
              Sign Up as Financial Advisor
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: '#64748b' }}>
              Already have an account?{' '}
              <span 
                onClick={() => { onClose(); onLoginOpen(); }}
                style={{ color: '#4361ee', cursor: 'pointer', fontWeight: 600, marginLeft: '4px' }}
              >
                Sign In
              </span>
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default SignupModal;
