// Product actions here
import {getProductAPI} from "../product/product.api";

import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    // RESET_PRODUCTS
   } from "./product.types.js"
   
export const getProducts = async (dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    try{
      let data = await getProductAPI();
      dispatch({type:GET_PRODUCTS_SUCCESS, payload:data})
    }
    catch(err){
      dispatch({type:GET_PRODUCTS_ERROR})
    }
}