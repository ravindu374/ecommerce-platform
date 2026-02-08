import React from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = ({ 
  title = 'ASUS TUF GAMING FX505',
  subtitle = 'GAMING PERFORMANCE AT AN AFFORDABLE PRICE',
  image = 'https://images.unsplash.com/photo-1698512475067-74ed7c956c8d',
  actionText = 'SHOP NOW',
  onAction = () => {},
}) => {
  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)`,
        color: '#fff',
        py: { xs: 2, md: 3 },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 1, sm: 2 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            alignItems: 'center',
          }}
        >
          {/* Content */}
          <Box>
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#ff9800',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                mb: 0.5,
              }}
            >
              New Arrival
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 0.75,
                fontSize: { xs: '1.25rem', md: '1.75rem' },
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.8125rem', md: '0.9375rem' },
                color: '#b0bec5',
                fontWeight: 400,
                mb: 1.5,
              }}
            >
              {subtitle}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                onClick={onAction}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  px: 2.5,
                }}
              >
                {actionText}
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  textTransform: 'none',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  px: 2.5,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderColor: '#fff',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>

          {/* Image */}
          <Box
            sx={{
              textAlign: 'center',
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: 200,
                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
