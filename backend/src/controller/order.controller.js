class OrderController {
  constructor({ newOrderService, getAllOrderService, updateOrderService }) {
    this.newOrderService = newOrderService;
    this.getAllOrderService = getAllOrderService;
    this.updateOrderService = updateOrderService;
    this.createOrder = this.createOrder.bind(this);
    this.getAllOrder = this.getAllOrder.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
  }
  async createOrder(req, res) {
    try {
      const { orders, userId } = req.body;
      const result = await this.newOrderService.execute(orders, userId);
      if (!result) throw new Error("create order failed");
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

  async getAllOrder(req, res) {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startPoint = parseInt(page) * limit;
      const result = await this.getAllOrderService.execute(startPoint, limit);
      if (!result) throw new Error("data not found");
      res.status(200).json({
        valid: true,
        orders: result.orders,
        totalPage: result.totalPage,
      });
    } catch (err) {
      res.status(400).json({ valid: false, orders: null, totalPage: null });
    }
  }

  async updateOrder(req, res) {
    try {
      const { id } = req.body;
      const { status } = req.params;
      const result = this.updateOrderService.execute(id, status);
      if (!result) throw new Error("update failed");
      res.status(200).json({
        valid: true,
        updatedOrder: result,
        message: "updated successfully",
      });
    } catch (err) {
      res
        .status(400)
        .json({ valid: false, updatedOrder: null, message: err.message });
    }
  }
}

module.exports = OrderController;
