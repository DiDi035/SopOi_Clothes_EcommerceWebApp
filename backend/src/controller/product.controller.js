class ProductController {
  constructor({ getProductService }) {
    this.getProductService = getProductService;

    this.get = this.get.bind(this);
  }

  async get(req, res) {
    const { typeCustomer } = req.params;
    const result = await this.getProductService.execute(typeCustomer);
    try {
      if (!result) throw new Error("Product not found");
      res.status(200).json({
        products: result.products,
        categories: result.categories,
        valid: true,
        message: "success",
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
        products: null,
        categories: null,
        valid: false,
      });
    }
  }
}

module.exports = ProductController;
