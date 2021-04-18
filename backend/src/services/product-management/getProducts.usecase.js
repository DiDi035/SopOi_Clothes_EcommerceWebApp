class GetProducts {
  constructor({ productGateway }) {
    this.productGateway = productGateway;
  }
  async execute(data, condition, startPoint, limit) {
    let result;
    switch (condition) {
      case "types":
        result = await this.productGateway.findByType(data, startPoint, limit);
        break;
      case "ids":
        result = await this.productGateway.findManyById(
          data,
          startPoint,
          limit
        );
        break;
      default:
    }
    return result ? result : null;
  }
}

module.exports = GetProducts;
