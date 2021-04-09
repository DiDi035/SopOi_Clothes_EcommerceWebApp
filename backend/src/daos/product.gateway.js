class ProductGateway {
  constructor({ productModel, productMapper }) {
    this.productModel = productModel;
    this.productMapper = productMapper;
  }

  async findByType(typePerson, typeClothes, types) {
    const products = await this.productModel.find({
      typePerson,
      typeClothes,
      types,
    });
    if (products) return this.productMapper.toManyEntity(products);
    return null;
  }
}

module.exports = ProductGateway;
