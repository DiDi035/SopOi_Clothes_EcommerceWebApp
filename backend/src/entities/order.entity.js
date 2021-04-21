class Order {
  constructor(
    id,
    name,
    userId,
    productId,
    color,
    size,
    quantity,
    price,
    date,
    status
  ) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.productId = productId;
    this.color = color;
    this.size = size;
    this.quantity = quantity;
    this.price = price;
    this.date = date;
    this.status = status;
  }
}

module.exports = Order;
