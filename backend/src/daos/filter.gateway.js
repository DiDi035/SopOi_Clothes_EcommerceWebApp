const mongoose = require("mongoose");

class FilterGateway {
  constructor({ filterModel, filterMapper }) {
    this.filterModel = filterModel;
    this.filterMapper = filterMapper;
  }
  async getStock(productId) {
    try {
      const filters = await this.filterModel.find({ productId });
      if (filters.length === 0) throw new Error("FIlter not found");
      return this.filterMapper.toManyEntity(filters);
    } catch (err) {
      return null;
    }
  }
}

module.exports = FilterGateway;
