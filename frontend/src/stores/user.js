import { createStore } from "redux";
import userReducer from "../reducer/user";

const userStore = createStore(userReducer);

export default userStore;
