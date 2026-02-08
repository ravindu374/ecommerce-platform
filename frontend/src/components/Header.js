import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  InputBase,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({ cartCount = 0, brands = [], selectedBrand = null, onBrandSelect = () => {} }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleBrandClick = (brandName) => {
    onBrandSelect(brandName);
    handleMenuClose();
  };

  return (
    <>
      {/* Top Bar */}
      <Box sx={{ bgcolor: '#1a1a1a', color: '#fff', py: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box>🔥 Hot Deals | Limited Time Offers</Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <a href="#track-order" style={{ color: 'inherit', textDecoration: 'none' }}>Track Order</a>
              <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Header */}
      <AppBar position="static" sx={{ bgcolor: '#fff', color: '#212121', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: '1.5rem' }}>
              <Box sx={{ width: 40, height: 40, bgcolor: '#1976d2', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1.5, color: '#fff' }}>
                🛒
              </Box>
              TechStore
            </Box>

            {/* Navigation Menu */}
            <Box sx={{ display: 'flex', gap: 2, ml: 'auto', mr: 3 }}>
              <Button color="inherit" sx={{ textTransform: 'none' }}>
                Laptops
              </Button>
              <Box>
                <Button
                  color="inherit"
                  onClick={handleMenuOpen}
                  endIcon={<ExpandMoreIcon />}
                  sx={{ 
                    textTransform: 'none',
                    bgcolor: selectedBrand ? 'rgba(25, 118, 210, 0.1)' : 'transparent'
                  }}
                >
                  {selectedBrand ? `${selectedBrand} Laptops` : 'Laptops by Brands'}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem 
                    onClick={() => handleBrandClick(null)}
                    sx={{ fontWeight: !selectedBrand ? 600 : 400 }}
                  >
                    All Brands
                  </MenuItem>
                  {brands.map((brand) => (
                    <MenuItem 
                      key={brand.label}
                      onClick={() => handleBrandClick(brand.label)}
                      sx={{ fontWeight: selectedBrand === brand.label ? 600 : 400 }}
                    >
                      {brand.label} ({brand.count})
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Button color="inherit" sx={{ textTransform: 'none' }}>
                Networking Devices
              </Button>
              <Button color="inherit" sx={{ textTransform: 'none' }}>
                Printers & Scanners
              </Button>
              <Button color="inherit" sx={{ textTransform: 'none' }}>
                PC Parts
              </Button>
              <Button color="inherit" sx={{ textTransform: 'none' }}>
                All Other Products
              </Button>
            </Box>

            {/* Search & Icons */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
            </Search>

            <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
              <IconButton color="inherit" size="small">
                <Badge badgeContent={0} color="primary">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" size="small">
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" size="small">
                <AccountCircleIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
