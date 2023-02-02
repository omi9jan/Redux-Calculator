// TODO: use this store variable to create a store.
import { legacy_createStore, compose,combineReducers } from "redux";
import {authReducer} from "./auth/auth.reducer"
import {cartReducer} from "./cart/cart.reducer"
import {productReducer} from "./product/product.reducer"

const rootReducer = combineReducers({
  auth : authReducer,
  cart : cartReducer,
  product : productReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Note: you can delete the line below, but remember to create a new store variable
export const store = legacy_createStore(rootReducer, composeEnhancer());

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
