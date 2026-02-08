const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};
