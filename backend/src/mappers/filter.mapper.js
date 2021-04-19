const Filter = require("../entities/filter.entity");

module.exports = class FilterMapper {
  constructor() {}
  toManyEntity(dbItem) {
    let listOfEntities = [];
    dbItem.map((item) => {
      const { color, size, productId, stock } = item;
      listOfEntities.push(new Filter(color, size, stock, productId));
    });
    return listOfEntities;
  }

  async toDatabase(entity) {}
};
