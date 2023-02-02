// Note: Do not update/change the initial state

import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  // AUTH_SIGN_OUT,
  RESET_AUTH
}from "./auth.types"

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,action) => {
  switch(action.type){
    case AUTH_SIGN_IN_LOADING :{
      return{
        ...state,
        loading:true,
      }
    }
    case AUTH_SIGN_IN_SUCCESS :{
      return{
        ...state,
        loading:false,
        isAuthenticated:true,
        token: action.payload.token,
      }
    }
    case AUTH_SIGN_IN_ERROR :{
      return{
        ...state,
        loading:false,
        error:true,
      }
    }
    case RESET_AUTH :{
      return{
        ...state,
        loading:false,
        error:false,
        isAuthenticated:false,
        token: "",
      }
    }
    default :{
      return state;
    }
  }
};
