import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducers from "./root-reducers";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persister = persistStore(store);
