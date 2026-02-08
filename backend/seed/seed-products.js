const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Product = require('../models/product');

dotenv.config();

const products = [
  {
    title: '13" ASUS M16 16th Gen Intel Core | RTX 4060',
    brand: 'ASUS',
    description: 'High-performance gaming laptop with RTX graphics and fast refresh display.',
    price: 1649,
    category: 'Laptops',
    image: 'https://laptopmedia.com/wp-content/uploads/2023/01/2-2-e1672788611658.jpg'
  },
  {
    title: 'MSI GF63 Thin 12th Gen Intel Core i5 | RTX 3050',
    brand: 'MSI',
    description: 'Slim and light gaming laptop with strong thermals and RTX 3050 GPU.',
    price: 449,
    category: 'Laptops',
    image: 'https://mdcomputers.lk/wp-content/uploads/2025/04/b8fcf45acec4381996e4df2f340e9126.png'
  },
  {
    title: 'ASUS TUF Gaming F15 11th Gen Intel Core i7 | RTX 3070',
    brand: 'ASUS',
    description: 'TUF durability with powerful RTX 3070 graphics for competitive play.',
    price: 1899,
    category: 'Laptops',
    image: 'https://laptopcare.lk/wp-content/uploads/2024/08/507.png'
  },
  {
    title: 'MSI Stealth 15M 11th Gen Intel Core i7 | RTX 3060',
    brand: 'MSI',
    description: 'Premium thin-and-light design paired with RTX 3060 performance.',
    price: 1499,
    category: 'Laptops',
    image: 'https://m.media-amazon.com/images/I/619ufv8EySL._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: '13" ASUS Vivobook 13 11th Gen Intel Core i5',
    brand: 'ASUS',
    description: 'Portable everyday laptop with a vibrant display and fast SSD storage.',
    price: 599,
    category: 'Laptops',
    image: 'https://suhadha.lk/wp-content/uploads/2023/04/1349-20210920181047-1309-20201209115516-vivobook_15_x513_product_photo_1b__cobalt_blue_13-1200x1200.png.webp'
  },
  {
    title: 'MSI GE75 Raider 10th Gen Intel Core i9 | RTX 2080',
    brand: 'MSI',
    description: 'High-end gaming powerhouse with i9 CPU and RTX 2080 GPU.',
    price: 2099,
    category: 'Laptops',
    image: 'https://asset.msi.com/resize/image/global/product/product_3_20200309201655_5e6633b7c55ac.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
  },
  {
    title: 'ASUS ROG Strix G15 12th Gen Intel Core i9 | RTX 3080 Ti',
    brand: 'ASUS',
    description: 'Flagship ROG gaming laptop with RTX 3080 Ti and high refresh display.',
    price: 3599,
    category: 'Laptops',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJNz1Kf7xQh1MflO-kleAxYU1Uen-rd9DkQ&s'
  },
  {
    title: 'MSI Vector 15 11th Gen Intel Core i7 | RTX 3070',
    brand: 'MSI',
    description: 'Creator and gamer-focused laptop with RTX 3070 graphics.',
    price: 1999,
    category: 'Laptops',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKB_L9YrwEU3iSjEOOcvpoyOoSTJCPcwZFEA&s'
  },
  {
    title: '16" ASUS VivoBook Pro 14 OLED 12th Gen Intel',
    brand: 'ASUS',
    description: 'OLED display and strong performance for creators and professionals.',
    price: 1799,
    category: 'Laptops',
    image: 'https://dlcdnwebimgs.asus.com/gain/a9903c82-cc86-409b-93c4-a4fdb33237ac/w800'
  },
  {
    title: 'MSI Prestige 16 EVO 11th Gen Intel Core i7 | RTX 3050 Ti',
    brand: 'MSI',
    description: 'Elegant design with RTX 3050 Ti for productivity and light gaming.',
    price: 2499,
    category: 'Laptops',
    image: 'https://asset.msi.com/resize/image/global/product/product_16826329743e44ed09c42dc9990d68af3337ffb840.png/800.png'
  },
  {
    title: 'ASUS Chromebook Flip C436FA 10th Gen Intel Core i5',
    brand: 'ASUS',
    description: 'Convertible Chromebook with all-day battery and premium build.',
    price: 649,
    category: 'Laptops',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMc4h96QAzY568PG9rl6u8jRoNbpMKggUc9g&s'
  },
  {
    title: 'MSI Creator Z17 12th Gen Intel Core i9 | RTX 3080 Ti',
    brand: 'MSI',
    description: 'Creator-focused 17-inch laptop with top-tier graphics.',
    price: 3899,
    category: 'Laptops',
    image: 'https://m.media-amazon.com/images/I/61qOM730aqL._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'Dell XPS 13 12th Gen Intel Core i7',
    brand: 'Dell',
    description: 'Premium ultrabook with stunning InfinityEdge display and exceptional build quality.',
    price: 1299,
    category: 'Laptops',
    image: 'https://m.media-amazon.com/images/I/91MXLpouhoL._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'HP Pavilion Gaming 15 AMD Ryzen 7 | RTX 3060',
    brand: 'HP',
    description: 'Affordable gaming laptop with solid performance and RGB keyboard.',
    price: 899,
    category: 'Laptops',
    image: 'https://laptopmedia.com/wp-content/uploads/2019/11/hp-na-gaming-laptop-original-imaftpesbvfxgw9t.jpeg'
  },
  {
    title: 'Dell Inspiron 15 3000 11th Gen Intel Core i5',
    brand: 'Dell',
    description: 'Budget-friendly laptop perfect for everyday tasks and productivity.',
    price: 549,
    category: 'Laptops',
    image: 'https://m.media-amazon.com/images/I/71h8nzfzlBS._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'HP Spectre x360 14 12th Gen Intel Core i7',
    brand: 'HP',
    description: 'Premium 2-in-1 convertible with exceptional design and performance.',
    price: 1599,
    category: 'Laptops',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv9IU9aYwZ0cuHEiIRjRy1_K8-9VAJaHJrQ&s'
  }
];

const seed = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not set in backend/.env');
    }

    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log('Products seeded successfully.');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1);
  }
};

seed();
