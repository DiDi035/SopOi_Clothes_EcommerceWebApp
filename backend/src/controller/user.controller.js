class UserController {
  constructor({ loginService, registerService, getUserService }) {
    this.loginService = loginService;
    this.registerService = registerService;
    this.getUserService = getUserService;

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.get = this.get.bind(this);
  }

  async login(req, res) {
    const { email, password } = req.body;
    const result = await this.loginService.execute(email, password);
    try {
      if (!result.valid) throw new Error("Cant find this user");
      res.header("auth-token", result.token).send({
        valid: result.valid,
        userId: result.userId,
        ava: result.ava,
        type: result.type,
      });
    } catch (err) {
      res.send({ valid: false, userId: null });
    }
  }

  async register(req, res) {
    const { name, email, password } = req.body;
    const { type } = req.params;
    const result = await this.registerService.execute(
      name,
      email,
      password,
      type
    );
    try {
      if (!result.valid) throw new Error(result.mess);
      res.json(result);
    } catch (err) {
      res.send({ valid: false, mess: err.message });
    }
  }

  async get(req, res) {
    const { id } = req.body;
    const result = await this.getUserService.execute(id);
    try {
      if (!result) throw new Error("Cant find user");
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = UserController;
