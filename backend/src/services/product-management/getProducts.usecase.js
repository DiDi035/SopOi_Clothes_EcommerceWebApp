class GetProducts {
  constructor({ productGateway }) {
    this.productGateway = productGateway;
  }
  async execute(data, condition) {
    let product;
    switch (condition) {
      case "types":
        product = await this.productGateway.findByType(data);
        break;
      case "ids":
        product = await this.productGateway.findManyById(data);
        break;
      default:
    }
    return product ? product : null;
  }
}

module.exports = GetProducts;
