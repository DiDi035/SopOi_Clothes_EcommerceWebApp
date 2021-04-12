// Main
const awilix = require("awilix");
const App = require("./main/App");
const Server = require("./main/Server");
const Router = require("./main/Router");
const DatabaseConection = require("./main/DatabaseConnection");
// Services
const loginService = require("./services/user-management/login.usecase");
const registerService = require("./services/user-management/register.usecase");
const getUserService = require("./services/user-management/getUser.usecase");
const getProductService = require("./services/product-management/getProducts.usecase");
// Routes
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");
// Models
const userModel = require("./models/user.model");
const productModel = require("./models/product.model");
const categoryModel = require("./models/category.model");
// Controllers
const userController = require("./controller/user.controller");
const productController = require("./controller/product.controller");
// Daos
const userGateway = require("./daos/user.gateway");
const productGateway = require("./daos/product.gateway");
// Ulti
const Authentication = require("./utils/authentication");
const PasswordHasher = require("./utils/password-hasher");
// Mappers
const userMapper = require("./mappers/user.mapper");
const productMapper = require("./mappers/product.mapper");
const categoryMapper = require("./mappers/category.mapper");

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
  productModel: awilix.asValue(productModel),
  categoryModel: awilix.asValue(categoryModel),

  //controllers
  userController: awilix.asClass(userController),
  productController: awilix.asClass(productController),

  // daos
  userGateway: awilix.asClass(userGateway),
  productGateway: awilix.asClass(productGateway),

  // utilities
  authentication: awilix.asClass(Authentication),
  passwordHasher: awilix.asClass(PasswordHasher),

  // mappers
  userMapper: awilix.asClass(userMapper),
  productMapper: awilix.asClass(productMapper),
  categoryMapper: awilix.asClass(categoryMapper),
});

module.exports = container;
