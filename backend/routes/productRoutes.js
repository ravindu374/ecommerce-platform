const express = require('express');
const {
  getProducts,
  createProduct,
  createManyProducts,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.post('/bulk', createManyProducts);

module.exports = router;


