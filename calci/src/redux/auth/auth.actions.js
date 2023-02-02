import {loginAPI} from "./auth.api.js"
// Auth Actions here
import {
    AUTH_SIGN_IN_LOADING,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SIGN_OUT
  }from "./auth.types"
import {RESET_CART_ITEMS} from "../cart/cart.types";
import {RESET_PRODUCTS} from "../product/product.types"

export const login  = async (dispatch, creds)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})
    try{
      let data = await loginAPI(creds);
      dispatch({type:AUTH_SIGN_IN_SUCCESS, payload:data})
    }
    catch(err){
      dispatch({type:AUTH_SIGN_IN_ERROR})
    }
}

export const logout = (dispatch)=>{
    dispatch({type:AUTH_SIGN_OUT});
    dispatch({type:RESET_CART_ITEMS});
    dispatch({type:RESET_PRODUCTS});
}