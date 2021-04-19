const mongoose = require("mongoose");

class OrderGateway {
  constructor({ orderModel, orderMapper }) {
    this.orderModel = orderModel;
    this.orderMapper = orderMapper;
  }

  async insertOrder(orders) {
    const result = await this.orderModel.insertMany(orders);
    return result;
  }
}

module.exports = OrderGateway;
