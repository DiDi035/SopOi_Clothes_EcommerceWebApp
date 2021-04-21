class GetAllOrders {
  constructor({ orderGateway }) {
    this.orderGateway = orderGateway;
  }

  async execute(startPoint, limit) {
    try {
      const result = await this.orderGateway.getAllOrders(startPoint, limit);
      if (!result) throw new Error("data not found");
      return result;
    } catch (err) {
      return null;
    }
  }
}

module.exports = GetAllOrders;
