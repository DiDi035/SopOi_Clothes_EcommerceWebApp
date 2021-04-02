const User = require("../../entities/user.entity");

module.exports = class UserMapper {
  constructor({ passwordHasher }) {
    this.passwordHasher = passwordHasher;
  }

  toEntity(dbItem) {
    const { _id, name, email, password, type, ava } = dbItem;
    return new User(_id, name, email, password, type, ava);
  }

  async toDatabase(entity) {
    const { name, email, type, ava } = entity;
    let { password } = entity;
    password = await this.passwordHasher.hash(password);
    return {
      name,
      password,
      type,
      ava,
      email,
    };
  }
};
