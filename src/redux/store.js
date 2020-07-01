import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducers from "./root-reducers";

import logger from "redux-logger";
const middlewares = [logger];

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
export const persister = persistStore(store);
