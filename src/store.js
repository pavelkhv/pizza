import { createStore, compose } from "redux";
import rootReducer from "./reducers/index";

// eslint-disable no-underscore-dangle
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadState => (
  createStore(
    rootReducer,
    preloadState,
    composeEnhancers(),
  )
);

const store = configureStore({});

export default store;