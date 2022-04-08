import { SET_PIZZAS } from '../types';

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
            };
        default:
            return state;
    }
};

export default pizzas;
