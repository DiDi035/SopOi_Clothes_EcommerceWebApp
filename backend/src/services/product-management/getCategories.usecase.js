class GetCategories {
  constructor({ categoryGateway }) {
    this.categoryGateway = categoryGateway;
  }
  async execute() {
    const categories = await this.categoryGateway.getAllCategories();
    return categories ? categories : null;
  }
}

module.exports = GetCategories;
