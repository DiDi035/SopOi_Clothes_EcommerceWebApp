class ProductController {
  constructor({ getProductService, getCategoriesService, getStockService }) {
    this.getProductService = getProductService;
    this.getCategoriesService = getCategoriesService;
    this.getStockService = getStockService;
    this.getProducts = this.getProducts.bind(this);
    this.getAllCategories = this.getAllCategories.bind(this);
    this.getStock = this.getStock.bind(this);
  }

  async getProducts(req, res) {
    const { condition } = req.params;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const { data } = req.body;
    const startPoint = parseInt(page) * 15;
    const result = await this.getProductService.execute(
      data,
      condition,
      startPoint,
      limit
    );
    try {
      if (!result) throw new Error("Product not found");
      res.status(200).json({
        products: result.products,
        valid: true,
        message: "success",
        total: result.total,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
        products: null,
        valid: false,
        total: 0,
      });
    }
  }
  async getAllCategories(req, res) {
    const result = await this.getCategoriesService.execute();
    try {
      if (!result) throw new Error("Categories not found");
      res
        .status(200)
        .json({ categories: result, valid: true, message: "success" });
    } catch (err) {
      res.status(400).json({ categories: {}, valid: false, message: err });
    }
  }

  async getStock(req, res) {
    const { productId } = req.body;
    try {
      const result = await this.getStockService.execute(productId);
      if (!result) throw new Error("Filter not found");
      res
        .status(200)
        .json({ filters: result, valid: true, message: "success" });
    } catch (err) {
      res.status(400).json({ filter: null, valid: false, message: err });
    }
  }
}

module.exports = ProductController;
