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
      const products = await this.productModel.find({ typeCustomer });
      if (products.length <= 0) throw "Product not found";
      let categories = [];
      for (let i = 0; i < products.length; ++i) {
        const cate = await this.categoryModel.findOne({
          productId: new mongoose.Types.ObjectId(products[i]._id),
        });
        if (cate) categories.push(cate);
      }
      return {
        products: this.productMapper.toManyEntity(products),
        categories: this.categoryMapper.toManyEntity(categories),
      };
    } catch (err) {
      return null;
    }
  }
}

module.exports = ProductGateway;
