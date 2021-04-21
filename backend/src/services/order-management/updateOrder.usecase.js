class UpdateOrder {
  constructor({ orderGateway, filterGateway }) {
    this.orderGateway = orderGateway;
    this.filterGateway = filterGateway;
  }

  async execute(id, updateStatus) {
    try {
      const result = await this.orderGateway.updateOrders(id, updateStatus);
      if (!result) throw new Error("update failed");
      if (updateStatus == "Canceled") {
        const { productId, color, size, quantity } = result;
        const update = await this.filterGateway.updateStock(
          productId,
          color,
          size,
          quantity
        );
      }
      return result;
    } catch (err) {
      return null;
    }
  }
}

module.exports = UpdateOrder;
