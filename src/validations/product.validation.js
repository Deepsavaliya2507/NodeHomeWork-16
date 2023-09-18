const Joi = require("joi");

/** create product */
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    company_name: Joi.string().required().trim(),
    stock: Joi.number().integer().required(),
    product_image: Joi.string().allow,
  }),
};

/** GEt product list */
const getProductList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get product details by id */
const getDetails = {
  params: Joi.object().keys({
    productId: Joi.string().required().trim(),
  }),
};

/** product details update by id */
const updateDetails = {
  params: Joi.object().keys({
    productId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    product_name: Joi.string().trim(),
    company_name: Joi.string().trim(),
    stock: Joi.number().integer().required(),
  }),
};

module.exports = {
  createProduct,
  getDetails,
  getProductList,
  updateDetails,
};
