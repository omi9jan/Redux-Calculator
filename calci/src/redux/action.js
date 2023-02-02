import { ADD_COUNT, REMOVE_COUNT, ADD_TODO, MUL_COUNT, DIV_COUNT } from "./actionTypes.js";

export const addCount = (data) => {
    return { type: ADD_COUNT, payload: data };
}

export const removeCount = (data) => {
    return { type: REMOVE_COUNT, payload: data };
}

export const addTodo = (data) => {
    return {type: ADD_TODO, payload:data}
}

export const multiCount = (data) => {
     return {type: MUL_COUNT, payload:data}
}

export const divideCount = (data) => {
     return {type: DIV_COUNT, payload:data}
}