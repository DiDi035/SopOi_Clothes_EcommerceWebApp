class GetProducts {
  constructor({ productGateway }) {
    this.productGateway = productGateway;
  }
  async execute(typePerson, typeClothes, type) {
    const product = await this.productGateway.findByType(
      typePerson,
      typeClothes,
      type
    );
    return product ? product : null;
  }
}

module.exports = GetProducts;
