import { createStore, applyMiddleware } from "redux";
import { rootReducers } from "./root-reducers";

import logger from "redux-logger";
const middlewares = [logger];

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
