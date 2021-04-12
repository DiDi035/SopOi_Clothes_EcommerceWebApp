class GetProducts {
  constructor({ productGateway }) {
    this.productGateway = productGateway;
  }
  async execute(typeCustomer) {
    const product = await this.productGateway.findByType(typeCustomer);
    return product ? product : null;
  }
}

module.exports = GetProducts;
