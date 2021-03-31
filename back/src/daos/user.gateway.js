class UserGateway {
  constructor({ userModel, userMapper }) {
    this.userModel = userModel;
    this.userMapper = userMapper;
  }

  async findByUsername(name) {
    const user = await this.userModel.findOne({ name });
    if (user) return this.userMapper.toEntity(user);
    return null;
  }

  async findByEmail(email) {
    const user = await this.userModel.findOne({ email });
    if (user) return this.userMapper.toEntity(user);
    return null;
  }

  async findById(id) {
    const user = await this.userModel.findById({ _id: id });
    if (user) return this.userMapper.toEntity(user);
    return null;
  }

  async insert(dbItem) {
    const user = await this.userModel.insertMany(dbItem);
    return user;
  }
}

module.exports = UserGateway;
