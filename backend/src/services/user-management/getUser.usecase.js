class GetUser {
  constructor({ userGateway }) {
    this.userGateway = userGateway;
  }
  async execute(id) {
    try {
      const user = await this.user.findById(id);
      if (!user) throw new Error("user not found");
      return user;
    } catch (error) {
      return null;
    }
  }
}

module.exports = GetUser;
