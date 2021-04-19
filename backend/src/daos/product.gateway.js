const mongoose = require("mongoose");

class ProductGateway {
  constructor({ productModel, productMapper }) {
    this.productModel = productModel;
    this.productMapper = productMapper;
  }

  async findByType(typeCustomer, startPoint, limit) {
    try {
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

  async findManyById(ids, startPoint, limit) {
    try {
      let products = await this.productModel
        .find({ _id: { $in: ids } })
        .limit(limit)
        .skip(startPoint);
      let total = await this.productModel.countDocuments({ _id: { $in: ids } });
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
