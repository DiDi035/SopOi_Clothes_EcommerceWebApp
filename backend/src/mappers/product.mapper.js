const Product = require("../entities/product.entity");

module.exports = class ProductMapper {
  constructor() {}
  toManyEntity(dbItem) {
    let listOfEntities = [];
    dbItem.map((item) => {
      const {
        _id,
        name,
        stock,
        price,
        active,
        deleteAt,
        typeCustomer,
        img,
      } = item;
      listOfEntities.push(
        new Product(
          _id,
          name,
          stock,
          price,
          active,
          deleteAt,
          typeCustomer,
          img
        )
      );
    });
    return listOfEntities;
  }

  async toDatabase(entity) {}
};
