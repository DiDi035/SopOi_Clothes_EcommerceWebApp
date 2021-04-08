import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const userStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

userStore.subscribe(() => {
  console.log(`[SUBSCRIBE]: ${userStore.getState()}`);
});

export default userStore;
