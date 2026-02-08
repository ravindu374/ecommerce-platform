import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  IconButton,
  Rating,
  Chip,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';

const ProductCard = ({ product = {} }) => {
  const theme = useTheme();
  
  const {
    id = '1',
    image = 'https://via.placeholder.com/280x180/e8e4f3/5c4a99?text=Product',
    title = 'Product Title',
    price = 499.00,
    originalPrice = 599.00,
    rating = 4.5,
    reviews = 128,
    badge = 'New',
  } = product;

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.2s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        },
      }}
    >
      {/* Image Container */}
      <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: '#e8e4f3', minHeight: 160 }}>
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={title}
          sx={{
            objectFit: 'contain',
            p: 1,
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
        
        {/* Badge */}
        {badge && (
          <Chip
            label={badge}
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              bgcolor: '#ff9800',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.7rem',
              height: 20,
            }}
          />
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <Chip
            label={`-${discount}%`}
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: '#f44336',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.7rem',
              height: 20,
            }}
          />
        )}

        {/* Wishlist Icon */}
        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            bottom: 4,
            right: 4,
            bgcolor: 'rgba(255,255,255,0.9)',
            width: 32,
            height: 32,
            '&:hover': {
              bgcolor: '#fff',
            },
          }}
        >
          <FavoriteBorderIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, pb: 0.5, pt: 1, px: 1 }}>
        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
          <Rating value={rating} readOnly size="small" sx={{ fontSize: '1rem' }} />
          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem' }}>
            {reviews}
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontWeight: 500,
            mb: 0.75,
            fontSize: '0.8125rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.3,
            minHeight: '2.08em',
          }}
        >
          {title}
        </Typography>

        {/* Price */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#212121' }}>
            ${price.toFixed(2)}
          </Typography>
          {originalPrice > price && (
            <Typography
              sx={{
                textDecoration: 'line-through',
                color: 'text.secondary',
                fontSize: '0.75rem',
              }}
            >
              ${originalPrice.toFixed(2)}
            </Typography>
          )}
        </Box>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ pt: 0.5, pb: 1, px: 1 }}>
        <Button
          fullWidth
          variant="contained"
          size="small"
          color="primary"
          startIcon={<AddShoppingCartIcon sx={{ fontSize: 16 }} />}
          sx={{ 
            textTransform: 'none',
            fontSize: '0.75rem',
            py: 0.5,
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
