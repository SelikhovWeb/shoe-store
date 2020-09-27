import counterReducer from "./counter";
import userReducer from "./user"
import cartReducer from "./cart"
import filtersReducer from "./filters"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
  filters: filtersReducer
});

export default allReducers;
