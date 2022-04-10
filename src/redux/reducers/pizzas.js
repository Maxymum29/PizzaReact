import { SET_PIZZAS, SET_LOADED } from '../types';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoading: true,
            };
        case SET_LOADED:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default pizzas;
