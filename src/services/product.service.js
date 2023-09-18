const Product = require("../models/product.model");

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<product>}
 */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/**
 * Get product list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<product>}
 */
const getProductList = async (filter, options) => {
  return Product.find();
};

/**
 * Get product details by id
 * @param {ObjectId} productId
 * @returns {Promise<product>}
 */
const getProductById = async (productId) => {
  return Product.findById(productId);
};

/**
 * product details update by id
 * @param {ObjectId} productId
 * @param {object} updateBody
 * @returns {Promise<product>}
 */
const updateProductDetails = async (productId, updateBody) => {
  return Product.findByIdAndUpdate(productId, { $set: updateBody });
};

/**
 * Delete product
 * @param {ObjectId} productId
 * @returns {Promise<product>}
 */
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateProductDetails,
  deleteProduct,
};
