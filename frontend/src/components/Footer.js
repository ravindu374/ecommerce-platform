import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  IconButton,
  Card,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', mt: 8 }}>
      {/* Features Section */}
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ py: 6 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#fff', height: '100%' }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: '#e3f2fd',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LocalShippingIcon sx={{ color: '#1976d2', fontSize: 30 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Product Support
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Up to 3 all-inclusive years of care. Learn more
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#fff', height: '100%' }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: '#f3e5f5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SupportAgentIcon sx={{ color: '#9c27b0', fontSize: 30 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Personal Account
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                With support for your lifestyle upgrades. And more.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#fff', height: '100%' }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: '#e8f5e9',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <VerifiedUserIcon sx={{ color: '#4caf50', fontSize: 30 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Amazing Savings
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Up to 70% off on new electronics. Refer friends for rewards.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Newsletter Section */}
      <Box sx={{ bgcolor: '#1a1a1a', color: '#fff', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Sign Up To Our Newsletter.
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0bec5', mb: 2 }}>
                Be the first to hear about exclusive offers and updates.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  placeholder="Enter your email..."
                  size="small"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                    },
                    '& .MuiOutlinedInput-input::placeholder': {
                      color: 'rgba(255,255,255,0.6)',
                      opacity: 1,
                    },
                  }}
                />
                <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Footer Links */}
      <Box sx={{ bgcolor: '#fff', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={2.4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#about" color="inherit" underline="hover">
                  About Us
                </Link>
                <Link href="#privacy" color="inherit" underline="hover">
                  Privacy Policy
                </Link>
                <Link href="#terms" color="inherit" underline="hover">
                  Terms & Conditions
                </Link>
                <Link href="#contact" color="inherit" underline="hover">
                  Contact Us
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2.4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                PC Parts
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#cpu" color="inherit" underline="hover">
                  Processors
                </Link>
                <Link href="#gpu" color="inherit" underline="hover">
                  Graphics Cards
                </Link>
                <Link href="#ram" color="inherit" underline="hover">
                  RAM Memory
                </Link>
                <Link href="#storage" color="inherit" underline="hover">
                  Storage Drives
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2.4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Laptops
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#gaming-laptop" color="inherit" underline="hover">
                  Gaming Laptops
                </Link>
                <Link href="#business-laptop" color="inherit" underline="hover">
                  Business Laptops
                </Link>
                <Link href="#ultrabook" color="inherit" underline="hover">
                  Ultrabooks
                </Link>
                <Link href="#workstation" color="inherit" underline="hover">
                  Workstations
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2.4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Help
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#faq" color="inherit" underline="hover">
                  FAQ
                </Link>
                <Link href="#shipping" color="inherit" underline="hover">
                  Shipping Info
                </Link>
                <Link href="#returns" color="inherit" underline="hover">
                  Returns & Exchanges
                </Link>
                <Link href="#track" color="inherit" underline="hover">
                  Track My Order
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2.4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Connect
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size="small" href="#facebook" title="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton size="small" href="#instagram" title="Instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton size="small" href="#twitter" title="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton size="small" href="#linkedin" title="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Bottom Bar */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Copyright © 2025 TechStore. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' fill='%23FF5F00'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='20' font-weight='bold'%3EMC%3C/text%3E%3C/svg%3E"
                alt="Mastercard"
                style={{ height: 20 }}
              />
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' fill='%231434CB'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3Evisa%3C/text%3E%3C/svg%3E"
                alt="Visa"
                style={{ height: 20 }}
              />
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' fill='%23003087'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EPayPal%3C/text%3E%3C/svg%3E"
                alt="PayPal"
                style={{ height: 20 }}
              />
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' fill='%23252F3D'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='12' font-weight='bold'%3EAmazon%3C/text%3E%3C/svg%3E"
                alt="Amazon Pay"
                style={{ height: 20 }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
