// Note: Do not update/change the initial state
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  RESET_PRODUCTS
 } from "./product.types.js"

const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = productInitalState,action) => {
  switch(action.type){
    case GET_PRODUCTS_LOADING :{
      return{
        ...state,
        loading:true,
      }
    }
    case GET_PRODUCTS_SUCCESS :{
      return{
        ...state,
        loading:true,
        data: action.payload
      }
    }
    case GET_PRODUCTS_ERROR :{
      return{
        ...state,
        loading:false,
        error:true,
      }
    }
    case RESET_PRODUCTS :{
      return{
        ...productInitalState,
      }
    }
    default :{
      return state;
    }
  }
};


