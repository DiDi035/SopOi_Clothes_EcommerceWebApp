class NewOrder {
  constructor({ orderGateway }) {
    this.orderGateway = orderGateway;
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
      const result = this.orderGateway.insertOrder(orderItems);
      if (!result) throw new Error("create orders failed");
      return result;
    } catch (err) {
      return null;
    }
  }
}

module.exports = NewOrder;
