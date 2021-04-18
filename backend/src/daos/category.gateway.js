const mongoose = require("mongoose");

class CategoryGateway {
  constructor({ categoryMapper, categoryModel }) {
    this.categoryModel = categoryModel;
    this.categoryMapper = categoryMapper;
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
}

module.exports = CategoryGateway;
