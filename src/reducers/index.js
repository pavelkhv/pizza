import { combineReducers } from "redux";

import reducerCart from "./reducerCart";

const rootReducer = combineReducers({ cart: reducerCart });

export default rootReducer;