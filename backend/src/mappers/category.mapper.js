const Category = require("../entities/category.entity");

module.exports = class CategoryMapper {
  constructor() {}
  toManyEntity(dbItem) {
    let listOfEntities = [];
    dbItem.map((item) => {
      const { type, name, productId } = item;
      listOfEntities.push(new Category(type, name, productId));
    });
    return listOfEntities;
  }

  async toDatabase(entity) {}
};
