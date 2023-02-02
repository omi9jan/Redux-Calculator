// Cart Actions here
import {
    GET_CART_ITEMS_LOADING,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_ERROR,
   } from "./cart.types.js"
   
const getProducts = async (dispatch)=>{
    dispatch({type:GET_CART_ITEMS_LOADING})
    try{
      let data = await getProductAPI();
      dispatch({type:GET_CART_ITEMS_SUCCESS, payload:data})
    }
    catch(err){
      dispatch({type:GET_CART_ITEMS_ERROR})
    }
}


// // add item to cart
// export const ADD_ITEM_TO_CART_LOADING = "cart/items/add/laoding";
// export const ADD_ITEM_TO_CART_SUCCESS = "cart/items/add/success";
// export const ADD_ITEM_TO_CART_ERROR = "cart/items/add/error";

// // update cart items
// export const UPDATE_CART_ITEMS_LOADING = "cart/items/update/laoding";
// export const UPDATE_CART_ITEMS_SUCCESS = "cart/items/update/success";
// export const UPDATE_CART_ITEMS_ERROR = "cart/items/update/error";

// // REMOVE cart items
// export const REMOVE_CART_ITEMS_LOADING = "cart/items/remove/laoding";
// export const REMOVE_CART_ITEMS_SUCCESS = "cart/items/remove/success";
// export const REMOVE_CART_ITEMS_ERROR = "cart/items/remove/error";

// // Reset
// export const RESET_CART_ITEMS = "cart/items/reset";