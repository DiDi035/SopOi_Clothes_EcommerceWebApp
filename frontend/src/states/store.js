import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const userStore = createStore(rootReducer, applyMiddleware(thunk));

userStore.subscribe(() => {
  console.log(`[SUBSCRIBE]: ${userStore.getState()}`);
});

export default userStore;
