import React, { useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Pagination,
} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ProductCard from './ProductCard';

const ProductGrid = ({ products = [], viewMode = 'grid', onViewModeChange = () => {} }) => {
  const [sortBy, setSortBy] = React.useState('relevance');
  const [currentPage, setCurrentPage] = React.useState(1);

  // Reset to page 1 when products change
  useEffect(() => {
    setCurrentPage(1);
  }, [products]);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box sx={{ width: '100%' }}>
      {/* Toolbar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          pb: 1.5,
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
          Products ({products.length})
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {/* Sort */}
          <FormControl size="small" sx={{ minWidth: 130 }}>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              displayEmpty
              sx={{ textTransform: 'none', fontSize: '0.875rem' }}
            >
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="price-asc">Price: Low to High</MenuItem>
              <MenuItem value="price-desc">Price: High to Low</MenuItem>
              <MenuItem value="rating">Highest Rated</MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
            </Select>
          </FormControl>

          {/* View Mode Toggle */}
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <IconButton
              size="small"
              onClick={() => onViewModeChange('grid')}
              sx={{
                color: viewMode === 'grid' ? 'primary.main' : 'text.secondary',
                p: 0.5,
              }}
            >
              <ViewModuleIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => onViewModeChange('list')}
              sx={{
                color: viewMode === 'list' ? 'primary.main' : 'text.secondary',
                p: 0.5,
              }}
            >
              <ViewListIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Products Grid */}
      {paginatedProducts.length > 0 ? (
        <Grid container spacing={1.5} sx={{ mb: 3 }}>
          {paginatedProducts.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={viewMode === 'grid' ? 4 : 12}
              lg={viewMode === 'grid' ? 3 : 12}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            No products found
          </Typography>
        </Box>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="small"
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductGrid;
