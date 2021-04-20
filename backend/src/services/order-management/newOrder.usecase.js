class NewOrder {
  constructor({ orderGateway, filterGateway }) {
    this.orderGateway = orderGateway;
    this.filterGateway = filterGateway;
  }

  async execute(orders, userId) {
    try {
      let orderItems = [];
      orders.map((item) => {
        orderItems.push({
          name: item.name,
          userId: userId,
          productId: item.id,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
          price: item.quantity * item.price,
        });
      });
      const result = await this.orderGateway.insertOrder(orderItems);
      if (!result) throw new Error("create orders failed");
      orderItems.map(async (item) => {
        const { productId, color, size, quantity } = item;
        const update = await this.filterGateway.updateStock(
          productId,
          color,
          size,
          -quantity
        );
        if (!update) throw new Error("update filter failed");
      });
      return result;
    } catch (err) {
      return null;
    }
  }
}

module.exports = NewOrder;
