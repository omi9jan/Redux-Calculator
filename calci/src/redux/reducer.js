import { ADD_COUNT, REMOVE_COUNT, ADD_TODO, MUL_COUNT, DIV_COUNT } from "./actionTypes.js";
import { store } from "./reduxIntro.js";

export const reducerFn = (state, { type, payload }) => {
    switch (type) {
        case ADD_COUNT:
            return {
                ...state,
                counter: state.counter + payload,
            }
        case REMOVE_COUNT:
            return {
                ...state,
                    counter: state.counter - payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    ...payload    
                }]
            }
        case MUL_COUNT:
            return {
                ...state,
                counter: state.counter * payload
            }
        case DIV_COUNT:
            return {
                ...state,
                counter: state.counter / payload
            }
        default:
            return { ...state };
    }
};


class Store{
    constructor(reducerFn, initialState) {
        this.reducer = reducerFn;
        this.state = initialState;
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
}
