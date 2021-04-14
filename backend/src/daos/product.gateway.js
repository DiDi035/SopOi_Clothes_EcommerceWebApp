const mongoose = require("mongoose");

class ProductGateway {
  constructor({ productModel, productMapper, categoryModel, categoryMapper }) {
    this.productModel = productModel;
    this.productMapper = productMapper;
    this.categoryModel = categoryModel;
    this.categoryMapper = categoryMapper;
  }

  async findByType(typeCustomer) {
    try {
      let products = await this.productModel.find({ typeCustomer });
      if (products.length <= 0) throw "Product not found";
      return this.productMapper.toManyEntity(products);
    } catch (err) {
      return null;
    }
  }

  async getAllCategories() {
    try {
      const categories = await this.categoryModel.find();
      if (categories.length <= 0) throw new Error("categories not found");
      return this.categoryMapper.toManyEntity(categories);
    } catch (err) {
      return null;
    }
  }

  async findManyById(ids) {
    try {
      let products = await this.productModel.find({ _id: { $in: ids } });
      if (products.length <= 0) throw "Product not found";
      return this.productMapper.toManyEntity(products);
    } catch (err) {
      return null;
    }
  }
}

module.exports = ProductGateway;
