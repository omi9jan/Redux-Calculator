// Note: Do not update/change the initial state

import {
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  RESET_CART_ITEMS
} from "./cart.types"

const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState,action) =>{
  switch (action.type){
    case GET_CART_ITEMS_LOADING :{
      return{
        ...state,
        loading:true,
      }
    }
    case GET_CART_ITEMS_SUCCESS :{
      return{
        ...state,
        loading:true,
        data: action.payload
      }
    }
    case GET_CART_ITEMS_ERROR :{
      return{
        ...state,
        loading:false,
        error:true,
      }
    }
    case ADD_ITEM_TO_CART_LOADING :{
      return{
        ...state,
        loading:true,
      }
    }
    case ADD_ITEM_TO_CART_SUCCESS :{
      return{
        ...state,
        loading:true,
        data: action.payload
      }
    }
    case ADD_ITEM_TO_CART_ERROR :{
      return{
        ...state,
        loading:false,
        error:true,
      }
    }
    case UPDATE_CART_ITEMS_LOADING :{
      return{
        ...state,
        loading:true,
      }
    }
    case UPDATE_CART_ITEMS_SUCCESS :{
      return{
        ...state,
        loading:true,
        data: action.payload
      }
    }
    case UPDATE_CART_ITEMS_ERROR :{
      return{
        ...state,
        loading:false,
        error:true,
      }
    }
    case REMOVE_CART_ITEMS_LOADING :{
      return{
        ...state,
        loading:true,
      }
    }
    case REMOVE_CART_ITEMS_SUCCESS :{
      return{
        ...state,
        loading:true,
        data: action.payload
      }
    }
    case REMOVE_CART_ITEMS_ERROR :{
      return{
        ...state,
        loading:false,
        error:true,
      }
    }
    case RESET_CART_ITEMS :{
      return{
        ...cartInitalState,
      }
    }
    default :{
      return state;
    }
  }
};



