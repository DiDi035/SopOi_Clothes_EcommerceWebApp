class GetCategories {
  constructor({ productGateway }) {
    this.productGateway = productGateway;
  }
  async execute() {
    const categories = await this.productGateway.getAllCategories();
    return categories ? categories : null;
  }
}

module.exports = GetCategories;
