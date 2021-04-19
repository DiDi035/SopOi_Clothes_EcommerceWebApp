const Order = require("../entities/order.entity");

module.exports = class OrderMapper {
  constructor({ orderModel }) {
    this.orderModel = orderModel;
  }
  toManyEntity(dbItem) {
    let listOfEntities = [];
    dbItem.map((item) => {
      const {
        _id,
        userId,
        productId,
        color,
        size,
        quantity,
        price,
        date,
      } = item;
      listOfEntities.push(
        new Order(_id, userId, productId, color, size, quantity, price, date)
      );
    });
    return listOfEntities;
  }
};
