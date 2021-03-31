class Login {
  constructor({ userGateway, authentication }) {
    this.userGateway = userGateway;
    this.authentication = authentication;
  }
  async execute(email, password) {
    let user = await this.userGateway.findByEmail(email);
    if (
      user &&
      (await this.authentication.isMatched(password, user.password))
    ) {
      user = JSON.stringify(user);
      return this.authentication.sign(user);
    }
    return null;
  }
}

module.exports = Login;
