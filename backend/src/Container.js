const awilix = require("awilix");
const App = require("./main/App");
const Server = require("./main/Server");
const Router = require("./main/Router");
const DatabaseConection = require("./main/DatabaseConnection");
const loginService = require("./services/user-management/login.usecase");
const registerService = require("./services/user-management/register.usecase");
const getUserService = require("./services/user-management/getUser.usecase");
const getProductService = require("./services/product-management/getProducts.usecase");
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");
const userModel = require("./models/user.model");
const productModel = require("./models/product.model");
const userController = require("./controller/user.controller");
const productController = require("./controller/product.controller");
const userGateway = require("./daos/user.gateway");
const productGateway = require("./daos/product.gateway");
const Authentication = require("./utils/authentication");
const PasswordHasher = require("./utils/password-hasher");
const userMapper = require("./mappers/User/user.mapper");
const productMapper = require("./mappers/Product/product.mapper");

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
  getProductService: awilix.asClass(getProductService),

  // routes
  userRouter: awilix.asFunction(userRouter),
  authRouter: awilix.asFunction(authRouter),
  productRouter: awilix.asFunction(productRouter),

  // models
  userModel: awilix.asValue(userModel),
  productModel: awilix.asValue(userModel),

  //controllers
  userController: awilix.asClass(userController),
  productController: awilix.asClass(userController),

  // daos
  userGateway: awilix.asClass(userGateway),
  productGateway: awilix.asClass(userGateway),

  // utilities
  authentication: awilix.asClass(Authentication),
  passwordHasher: awilix.asClass(PasswordHasher),

  // mappers
  userMapper: awilix.asClass(userMapper),
  productMapper: awilix.asClass(userMapper),
});

module.exports = container;
