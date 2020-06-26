import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducers";
import { cartReducer } from "./cart/cart.reducers";

export const rootReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
