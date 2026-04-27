import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  IconButton, 
  Typography, 
  Box, 
  TextField, 
  Button,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LoginModal = ({ isOpen, onClose, onSignupOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        style: { borderRadius: 12, padding: '10px' }
      }}
    >
      <Box sx={{ position: 'relative', pt: 4, pb: 2 }}>
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
        
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: '#1e293b', mb: 1 }}>
            Welcome Back!
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Please login to your account
          </Typography>
        </Box>

        <DialogContent sx={{ pt: 0 }}>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500, color: '#1e293b', ml: 1 }}>
              Email
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ 
                mt: 0, mb: 2,
                '& .MuiOutlinedInput-root': { borderRadius: '10px' }
              }}
            />
            
            <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500, color: '#1e293b', ml: 1 }}>
              Password
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ 
                mt: 0, mb: 1,
                '& .MuiOutlinedInput-root': { borderRadius: '10px' }
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="body2" sx={{ color: '#4361ee', cursor: 'pointer', fontWeight: 500 }}>
                Forgot Password?
              </Typography>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" size="small" />}
                label={<Typography variant="body2" sx={{ color: '#64748b' }}>Remember Me</Typography>}
              />
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                py: 1.5, 
                borderRadius: '10px', 
                backgroundColor: '#4361ee',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 600,
                '&:hover': { backgroundColor: '#3651d1' }
              }}
              onClick={(e) => e.preventDefault()}
            >
              Login
            </Button>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#64748b' }}>
                New User?{' '}
                <span 
                  onClick={() => { onClose(); onSignupOpen(); }}
                  style={{ color: '#4361ee', cursor: 'pointer', fontWeight: 600, marginLeft: '4px' }}
                >
                  Create an account
                </span>
              </Typography>
            </Box>
            
            <Box sx={{ mt: 3, textAlign: 'center', position: 'relative' }}>
              <Typography variant="body2" sx={{ 
                color: '#64748b', 
                backgroundColor: '#fff', 
                display: 'inline-block', 
                px: 1,
                position: 'relative',
                zIndex: 1
              }}>
                or connect with
              </Typography>
              <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: 0, 
                right: 0, 
                height: '1px', 
                backgroundColor: '#e2e8f0',
                zIndex: 0
              }} />
            </Box>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <img src="/images/google.jpg" alt="Google" style={{ width: 40, height: 40, cursor: 'pointer' }} />
              {/* Facebook icon could go here too */}
            </Box>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default LoginModal;
