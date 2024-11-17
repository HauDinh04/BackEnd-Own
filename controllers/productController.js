const axios = require("axios");
const product = require("../models/product");
exports.productPage = async (req, res) => {
  try {
    const respone = await axios.get("http://localhost:5000/api/products");
    const products = respone.data;
    res.render("pages/product", { title: "product Page", products: products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getAllProducts = async (req,res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("[GET]_products", err);
  }
};
