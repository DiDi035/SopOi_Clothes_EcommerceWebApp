const mongoose = require("mongoose");

class FilterGateway {
  constructor({ filterModel, filterMapper }) {
    this.filterModel = filterModel;
    this.filterMapper = filterMapper;
  }
  async getStock(productId) {
    try {
      const filters = await this.filterModel.find({
        productId: new mongoose.Types.ObjectId(productId),
      });
      if (filters.length === 0) throw new Error("FIlter not found");
      return this.filterMapper.toManyEntity(filters);
    } catch (err) {
      return null;
    }
  }
  async updateStock(productId, color, size, updateStock) {
    try {
      const filter = await this.filterModel.findOne({ productId, color, size });
      if (!filter) throw new Error("Filter not found");
      filter.stock += updateStock;
      await filter.save();
      return filter;
    } catch (err) {
      return null;
    }
  }
}

module.exports = FilterGateway;
