const mongoose = require("mongoose");

class ProductGateway {
  constructor({ productModel, productMapper, categoryModel, categoryMapper }) {
    this.productModel = productModel;
    this.productMapper = productMapper;
    this.categoryModel = categoryModel;
    this.categoryMapper = categoryMapper;
  }

  async findByType(typeCustomer, startPoint, limit) {
    try {
      console.log(startPoint, limit);
      let products = await this.productModel
        .find({ typeCustomer })
        .skip(startPoint)
        .limit(limit);
      let total = await this.productModel.count({ typeCustomer });
      if (products.length <= 0) throw "Product not found";

      return {
        products: this.productMapper.toManyEntity(products),
        total: total,
      };
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

  async findManyById(ids, startPoint, limit) {
    try {
      let products = await this.productModel
        .find({ _id: { $in: ids } })
        .limit(limit)
        .skip(startPoint);
      let total = await this.productModel.count({ _id: { $in: ids } });
      if (products.length <= 0) throw "Product not found";
      return {
        products: this.productMapper.toManyEntity(products),
        total: total,
      };
    } catch (err) {
      return null;
    }
  }
}

module.exports = ProductGateway;
