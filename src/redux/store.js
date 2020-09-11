import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducers from "./root-reducers";

import logger from "redux-logger";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
export const persister = persistStore(store);
