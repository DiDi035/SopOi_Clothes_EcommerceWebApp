class ProductController {
  constructor({ getProductService }) {
    this.getProductService = getProductService;

    this.get = this.get.bind(this);
  }

  async get(req, res) {
    const { typePerson, typeClothes, types } = req.params;
    const result = await this.getProductService(typePerson, typeClothes, types);
    try {
      if (!result) throw new Error("Product not found");
      res.status(200).json({ data: result, valid: true, message: "success" });
    } catch (err) {
      res.status(400).json({ message: err.message, data: {}, valid: false });
    }
  }
}

module.exports = ProductController;
