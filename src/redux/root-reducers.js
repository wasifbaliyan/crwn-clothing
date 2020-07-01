import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { userReducer } from "./user/user.reducers";
import { cartReducer } from "./cart/cart.reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducers);
