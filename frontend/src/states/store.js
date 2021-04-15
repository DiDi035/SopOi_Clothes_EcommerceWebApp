import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/reducer";
import productReducer from "./product/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log(`[SUBSCRIBE]: ${store.getState()}`);
});

export default store;
