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

  async getAllOrders(startPoint, limit) {
    const orders = await this.orderModel.find().limit(limit).skip(startPoint);
    const total = await this.orderModel.countDocuments();
    return { orders: orders, totalPage: total };
  }

  async updateOrders(id, updateStatus) {
    const order = await this.orderModel.findOne({ _id: id });
    if (!order) return null;
    order.status = updateStatus;
    await order.save();
    return order;
  }
}

module.exports = OrderGateway;
