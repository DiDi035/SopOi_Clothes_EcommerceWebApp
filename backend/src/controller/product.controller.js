class ProductController {
  constructor({ getProductService, getCategoriesService }) {
    this.getProductService = getProductService;
    this.getCategoriesService = getCategoriesService;
    this.get = this.get.bind(this);
    this.getAllCategories = this.getAllCategories.bind(this);
  }

  async get(req, res) {
    const { typeCustomer, page } = req.params;
    const pageNum = parseInt(page) * 15;
    const products = await this.getProductService.execute(typeCustomer);
    try {
      if (!products) throw new Error("Product not found");
      res.status(200).json({
        products: products.slice(pageNum, pageNum + 15),
        valid: true,
        message: "success",
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
        products: null,
        valid: false,
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
}

module.exports = ProductController;
