class GetStock {
  constructor({ filterGateway }) {
    this.filterGateway = filterGateway;
  }
  async execute(productId) {
    try {
      const result = await this.filterGateway.getStock(productId);
      if (!result) throw new Error("Filter not found");
    } catch (err) {
      return null;
    }
  }
}

module.exports = GetStock;
