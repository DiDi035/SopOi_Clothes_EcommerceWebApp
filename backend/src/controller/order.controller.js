class OrderController {
  constructor({ newOrderService }) {
    this.newOrderService = newOrderService;
    this.createOrder = this.createOrder.bind(this);
  }
  async createOrder(req, res) {
    try {
      const { orders, userId } = req.body;
      const result = await this.newOrderService.execute(orders, userId);
      if (!result) throw new Error("create order failed");
      console.log(result);
      res.status(200).json({
        orders: result,
        valid: true,
        message: "success",
      });
    } catch (err) {
      res.status(400).json({
        orders: null,
        valid: false,
        message: err,
      });
    }
  }
}

module.exports = OrderController;
