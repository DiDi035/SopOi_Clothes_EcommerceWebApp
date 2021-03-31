const jwt = require("jsonwebtoken");
const config = require("../../config.json");

module.exports = class Authentication {
  constructor({ passwordHasher }) {
    this.passwordHasher = passwordHasher;
    this.sign = this.sign.bind(this);
    this.verify = this.verify.bind(this);
    this.isMatched = this.isMatched.bind(this);
  }

  sign(payload) {
    const token = jwt.sign(payload, config.Server.SECRET_KEY);
    return token;
  }

  verify(req, res, next) {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Acess denined");
    return jwt.verify(token, config.Server.SECRET_KEY, (err, decoded) => {
      if (err) return res.status(400).send("Invalid token");
      return next();
    });
  }

  async isMatched(password, data) {
    const result = await this.passwordHasher.isMatched(password, data);
    return result;
  }
};
