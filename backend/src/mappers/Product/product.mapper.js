const Product = require("../../entities/product.entity");

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
        isOccupied,
        typePerson,
        typeClothes,
        types,
        img,
      } = item;
      listOfEntities.push(
        new Product(
          _id,
          name,
          stock,
          price,
          typePerson,
          typeClothes,
          types,
          img
        )
      );
    });
    return listOfEntities;
  }

  async toDatabase(entity) {}
};
