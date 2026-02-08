import { useEffect, useState } from 'react';
import api from '../api';
import {
  Grid,
  Box,
  Breadcrumbs,
  Link,
  Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Header,
  Banner,
  FilterSidebar,
  ProductGrid,
  Footer,
} from '../components';


function Home() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({ selectedBrand: null });

  // Fetch products from backend when selectedBrand changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {};
        if (filters.selectedBrand) {
          params.brand = filters.selectedBrand;
        }
        const res = await api.get('/products', { params: params });
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setProducts([]);
      }
    };
    fetchProducts();
  }, [filters.selectedBrand]);

  // Fetch unique brands from backend (all products)
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await api.get('/products');
        const all = res.data;
        // Count products per brand
        const brandMap = {};
        all.forEach((p) => {
          if (p.brand) {
            brandMap[p.brand] = (brandMap[p.brand] || 0) + 1;
          }
        });
        setBrands(
          Object.entries(brandMap).map(([label, count]) => ({ label, count }))
        );
      } catch (err) {
        console.error('Error fetching brands:', err);
        setBrands([]);
      }
    };
    fetchBrands();
  }, []);

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleFilterChange = (filterKey, value) => {
    if (filterKey === 'brand') {
      setFilters((prev) => ({ ...prev, selectedBrand: value }));
    } else {
      setFilters((prev) => ({ ...prev, [filterKey]: value }));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#EAEDED' }}>
      <Header 
        cartCount={0} 
        brands={brands}
        selectedBrand={filters.selectedBrand}
        onBrandSelect={(brandName) => handleFilterChange('brand', brandName)}
      />

      {/* Banner - Compact */}
      <Box sx={{ bgcolor: '#fff', py: 2 }}>
        <Banner
          title="ASUS TUF GAMING FX505"
          subtitle="GAMING PERFORMANCE AT AN AFFORDABLE PRICE"
          image="https://images.unsplash.com/photo-1698512475067-74ed7c956c8d"
          actionText="SHOP NOW"
          onAction={() => {
            console.log('Shop Now clicked');
          }}
        />
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, px: { xs: 1, sm: 2, md: 3 }, py: 2 }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
          {/* Breadcrumb */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            sx={{ mb: 1.5, fontSize: '0.875rem' }}
          >
            <Link href="#" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Laptops
            </Link>
            <Typography color="text.primary" sx={{ fontSize: '0.875rem' }}>
              MSI FX Series
            </Typography>
          </Breadcrumbs>

          {/* Content Grid */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {/* Sidebar - Filters */}
            <Grid item xs={12} md={2.5}>
              <Box sx={{ bgcolor: '#fff', p: 2, borderRadius: 1 }}>
                <FilterSidebar
                  filters={{ ...filters, brands }}
                  onFilterChange={handleFilterChange}
                />
              </Box>
            </Grid>

            {/* Main - Products */}
            <Grid item xs={12} md={9.5}>
              <Box sx={{ bgcolor: '#fff', p: 2, borderRadius: 1 }}>
                <ProductGrid
                  products={products}
                  viewMode={viewMode}
                  onViewModeChange={handleViewModeChange}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Home;
