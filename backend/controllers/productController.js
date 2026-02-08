const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const filter = {};
    if (req.query.brand) {
      // Case-insensitive brand filter
      filter.brand = { $regex: new RegExp(`^${req.query.brand}$`, 'i') };
    }
    // Add more filters here as needed
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createManyProducts = async (req, res) => {
  try {
    const products = await Product.insertMany(req.body);
    res.status(201).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
