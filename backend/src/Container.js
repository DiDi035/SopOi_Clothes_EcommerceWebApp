const awilix = require("awilix");
const App = require("./main/App");
const Server = require("./main/Server");
const Router = require("./main/Router");
const DatabaseConection = require("./main/DatabaseConnection");
const loginService = require("./services/user-management/login.usecase");
const registerService = require("./services/user-management/register.usecase");
const getUserService = require("./services/user-management/getUser.usecase");
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
const userModel = require("./models/user.model");
const userController = require("./controller/user.controller");
const userGateway = require("./daos/user.gateway");
const Authentication = require("./utils/authentication");
const PasswordHasher = require("./utils/password-hasher");
const userMapper = require("./mappers/User/user.mapper");

const container = awilix.createContainer();

container.register({
  // main
  app: awilix.asClass(App),
  server: awilix.asClass(Server),
  router: awilix.asFunction(Router),
  database: awilix.asValue(DatabaseConection),

  // services
  loginService: awilix.asClass(loginService),
  registerService: awilix.asClass(registerService),
  getUserService: awilix.asClass(getUserService),

  // routes
  userRouter: awilix.asFunction(userRouter),
  authRouter: awilix.asFunction(authRouter),

  // models
  userModel: awilix.asValue(userModel),

  //controllers
  userController: awilix.asClass(userController),

  // daos
  userGateway: awilix.asClass(userGateway),

  // utilities
  authentication: awilix.asClass(Authentication),
  passwordHasher: awilix.asClass(PasswordHasher),

  // mappers
  userMapper: awilix.asClass(userMapper),
});

module.exports = container;
