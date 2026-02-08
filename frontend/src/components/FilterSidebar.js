import React from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Slider,
  Divider,
  Button,
  Badge,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';

const FilterSidebar = ({ filters = {}, onFilterChange = () => {} }) => {
  const [priceRange, setPriceRange] = React.useState(filters.priceRange || [0, 1000]);
  const [expandedSections, setExpandedSections] = React.useState({
    category: true,
    price: true,
    color: false,
    brand: true,  // Make brand section expanded by default
  });

  const handleSectionToggle = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    onFilterChange('priceRange', newValue);
  };

  const handleCheckboxChange = (group, value) => {
    onFilterChange(group, value);
  };

  const handleClearAll = () => {
    // Clear all filters
    onFilterChange('brand', null);
    onFilterChange('category', null);
    onFilterChange('color', null);
    onFilterChange('rating', null);
    setPriceRange([0, 1000]);
    onFilterChange('priceRange', [0, 1000]);
  };

  const categories = [
    { label: 'LAPTOPS', count: 56 },
    { label: 'DESKTOP COMPUTERS', count: 24 },
    { label: 'GAMING LAPTOPS', count: 18 },
    { label: 'BUSINESS LAPTOPS', count: 12 },
  ];

  const colors = [
    { label: 'Black', color: '#000000' },
    { label: 'Red', color: '#f44336' },
    { label: 'Silver', color: '#c0c0c0' },
    { label: 'Blue', color: '#1976d2' },
  ];

  // Brands are now passed as a prop for dynamic backend-driven filtering
  const { brands = [], selectedBrand } = filters;

  return (
    <Box sx={{ width: '100%', pr: { xs: 0, md: 0 } }}>
      {/* Clear Filters */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        startIcon={<ClearIcon />}
        size="small"
        onClick={handleClearAll}
        sx={{ mb: 1.5, textTransform: 'none', fontSize: '0.8125rem' }}
      >
        Clear All
      </Button>

      {/* Category Filter */}
      <Box sx={{ mb: 1.5 }}>
        <Box
          onClick={() => handleSectionToggle('category')}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            mb: 0.75,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
            Category
          </Typography>
          <ExpandMoreIcon
            sx={{
              transform: expandedSections.category ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
              fontSize: 18,
            }}
          />
        </Box>
        <Collapse in={expandedSections.category}>
          <FormGroup sx={{ gap: 0.25 }}>
            {categories.map((cat) => (
              <FormControlLabel
                key={cat.label}
                control={<Checkbox onChange={() => handleCheckboxChange('category', cat.label)} size="small" />}
                label={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.8125rem' }}>
                    <span>{cat.label}</span>
                    <Badge badgeContent={cat.count} color="primary" sx={{ ml: 1, '& .MuiBadge-badge': { fontSize: '0.65rem' } }} />
                  </Box>
                }
                sx={{ my: 0.25 }}
              />
            ))}
          </FormGroup>
        </Collapse>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Price Filter */}
      <Box sx={{ mb: 1.5 }}>
        <Box
          onClick={() => handleSectionToggle('price')}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            mb: 1,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
            Price
          </Typography>
          <ExpandMoreIcon
            sx={{
              transform: expandedSections.price ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
              fontSize: 18,
            }}
          />
        </Box>
        <Collapse in={expandedSections.price}>
          <Box sx={{ px: 0.5 }}>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={2000}
              sx={{ mb: 1 }}
              size="small"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography sx={{ fontSize: '0.75rem' }}>
                ${priceRange[0].toFixed(0)}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem' }}>
                ${priceRange[1].toFixed(0)}
              </Typography>
            </Box>
          </Box>
        </Collapse>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Color Filter */}
      <Box sx={{ mb: 1.5 }}>
        <Box
          onClick={() => handleSectionToggle('color')}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            mb: 0.75,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
            Color
          </Typography>
          <ExpandMoreIcon
            sx={{
              transform: expandedSections.color ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
              fontSize: 18,
            }}
          />
        </Box>
        <Collapse in={expandedSections.color}>
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
            {colors.map((col) => (
              <Box
                key={col.label}
                onClick={() => handleCheckboxChange('color', col.label)}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  bgcolor: col.color,
                  border: '2px solid #e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: '#1976d2',
                    transform: 'scale(1.08)',
                  },
                }}
                title={col.label}
              />
            ))}
          </Box>
        </Collapse>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Brand Filter */}
      <Box sx={{ mb: 1.5 }}>
        <Box
          onClick={() => handleSectionToggle('brand')}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            mb: 0.75,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
            Brands
          </Typography>
          <ExpandMoreIcon
            sx={{
              transform: expandedSections.brand ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
              fontSize: 18,
            }}
          />
        </Box>
        <Collapse in={expandedSections.brand}>
          {brands && brands.length > 0 ? (
            <RadioGroup
              value={selectedBrand || 'all'}
              onChange={(e) => onFilterChange('brand', e.target.value === 'all' ? null : e.target.value)}
              sx={{ gap: 0.25 }}
            >
              {/* All Brands Option */}
              <FormControlLabel
                key="all-brands"
                value="all"
                control={<Radio size="small" />}
                label={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.8125rem', ml: 0.5 }}>
                    <span style={{ fontWeight: selectedBrand === null ? 600 : 400 }}>All Brands</span>
                  </Box>
                }
                sx={{ my: 0.25 }}
              />
              {brands.map((brand) => (
                <FormControlLabel
                  key={brand.label}
                  value={brand.label}
                  control={<Radio size="small" />}
                  label={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.8125rem', ml: 0.5 }}>
                      <span style={{ fontWeight: selectedBrand === brand.label ? 600 : 400 }}>{brand.label}</span>
                      {brand.count !== undefined && (
                        <Badge badgeContent={brand.count} color="primary" sx={{ ml: 1, '& .MuiBadge-badge': { fontSize: '0.65rem' } }} />
                      )}
                    </Box>
                  }
                  sx={{ my: 0.25 }}
                />
              ))}
            </RadioGroup>
          ) : (
            <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary', py: 1 }}>
              Loading brands...
            </Typography>
          )}
        </Collapse>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Rating Filter */}
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', mb: 1 }}>
          Rating
        </Typography>
        <FormGroup sx={{ gap: 0.25 }}>
          {['5★', '4★+', '3★+', '2★+'].map((rating) => (
            <FormControlLabel
              key={rating}
              control={<Checkbox onChange={() => handleCheckboxChange('rating', rating)} size="small" />}
              label={rating}
              sx={{ my: 0.25, fontSize: '0.8125rem' }}
            />
          ))}
        </FormGroup>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
