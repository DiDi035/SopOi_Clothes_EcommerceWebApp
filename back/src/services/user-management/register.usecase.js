const User = require("../../entities/user.entity");

class Register {
  constructor({ userGateway, userMapper }) {
    this.userGateway = userGateway;
    this.userMapper = userMapper;
  }

  async execute(name, email, password, type) {
    const check1 = await this.userGateway.findByUsername(name);
    const check2 = await this.userGateway.findByEmail(email);
    if (check2 || check1) return false;
    const entity = new User(
      null,
      name,
      email,
      password,
      type,
      "day la cai hinh"
    );
    const dbItem = await this.userMapper.toDatabase(entity);
    const user = await this.userGateway.insert(dbItem);
    return this.userMapper.toEntity(user);
  }
}

module.exports = Register;
