import React, { useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
  TextField,
  InputAdornment,
  IconButton,
  CssBaseline,
  Divider,
  Grid
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import BoltIcon from '@mui/icons-material/Bolt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion, useScroll, useTransform } from 'framer-motion';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#f39c12',
    },
    background: {
      default: '#0f0f0f',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
  },
});

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const scrollDown = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const LandingPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        ref={containerRef}
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
        }}
      >
        <AppBar position="fixed" color="transparent" elevation={0}>
          <Toolbar sx={{ justifyContent: 'flex-end', px: 2 }}>
            <Button color="primary" variant="text" sx={{ mr: 2 }}>Sign Up</Button>
            <Button variant="contained" color="primary">Sign In</Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: 2,
            position: 'relative',
          }}
        >
          <motion.div 
            variants={fadeIn} 
            initial="hidden" 
            animate="visible" 
            custom={1}
            style={{ marginBottom: '2rem' }}
          >
            <BoltIcon sx={{ fontSize: 64, color: 'secondary.main' }} />
            <Typography variant="h1" fontWeight="bold" sx={{ mt: 2 }}>
              <Box component="span" sx={{ color: 'secondary.main' }}>Zorvyn</Box>
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              Your <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Resume Building</Box> AI Agent.
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
              Unlocking Your Potential with Intelligent AI Solutions
            </Typography>
          </motion.div>

          {/* Search bar at bottom of viewport */}
          <motion.div 
            style={{ 
              position: 'absolute', 
              bottom: '10%', 
              width: '80%',
              maxWidth: '600px',
              y,
              opacity
            }}
          >
            <TextField
              placeholder="Ask Zorvyn ..."
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: '#2a2a2a',
                borderRadius: 4,
                input: { color: 'white', fontSize: '1.1rem' },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" sx={{ color: 'white' }}>
                      <SearchIcon fontSize="large" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </motion.div>

          {/* Scroll down indicator */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '2%',
              left: '50%',
              transform: 'translateX(-50%)',
              cursor: 'pointer',
            }}
            variants={scrollDown}
            animate="animate"
            onClick={handleScrollDown}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          </motion.div>
        </Box>

        {/* Content Sections */}
        <Container maxWidth="md" sx={{ py: 10 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={10}
            textAlign="center"
          >
            {/* Step by step section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" fontWeight="bold" sx={{ mb: 4 }}>
                How It Works
              </Typography>
              <Typography variant="h4" sx={{ whiteSpace: 'pre-line', lineHeight: 2 }}>
                Step 1: Share Your Goals{"\n"}
                Step 2: Approve the Plan{"\n"}
                Step 3: Choose a Design{"\n"}
                Step 4: Apply to your dream job
              </Typography>
            </motion.div>

            {/* Story section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h2" fontWeight="bold" sx={{ mb: 4 }}>
                Our Story
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                sx={{ maxWidth: 800, mx: 'auto' }}
              >
                Zorvyn is <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>built by founders</Box> who once struggled
                as students to create the perfect resume—
                so we built exactly what we wished we had back then.
              </Typography>
            </motion.div>

            {/* CTA section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography variant="h2" fontWeight="bold">
                Where AI Meets Purpose
              </Typography>
              <Typography variant="h4" color="text.secondary" sx={{ mt: 2 }}>
                Unlock Opportunities with a Resume that Works for You
              </Typography>
              <Box mt={4}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  sx={{ 
                    borderRadius: 4,
                    padding: '12px 32px',
                    fontSize: '1.2rem'
                  }}
                >
                  Start Building
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{ py: 6, bgcolor: 'rgba(0,0,0,0.5)' }}>
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Box display="flex" alignItems="center">
                  <BoltIcon sx={{ fontSize: 32, color: 'secondary.main', mr: 1 }} />
                  <Typography variant="h6" fontWeight="bold">Zorvyn</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  The smartest AI resume builder for modern professionals.
                </Typography>
              </Grid>
              <Grid item xs={6} md={2}>
                <Typography variant="h6" sx={{ mb: 2 }}>Product</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Features</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Pricing</Typography>
                <Typography variant="body2" color="text.secondary">Templates</Typography>
              </Grid>
              <Grid item xs={6} md={2}>
                <Typography variant="h6" sx={{ mb: 2 }}>Resources</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Blog</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Resume Tips</Typography>
                <Typography variant="body2" color="text.secondary">Career Advice</Typography>
              </Grid>
              <Grid item xs={6} md={2}>
                <Typography variant="h6" sx={{ mb: 2 }}>Company</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>About</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Careers</Typography>
                <Typography variant="body2" color="text.secondary">Contact</Typography>
              </Grid>
              <Grid item xs={6} md={2}>
                <Typography variant="h6" sx={{ mb: 2 }}>Legal</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Privacy</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Terms</Typography>
                <Typography variant="body2" color="text.secondary">Security</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />
            <Typography variant="body2" color="text.secondary" textAlign="center">
              © {new Date().getFullYear()} Zorvyn AI. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;