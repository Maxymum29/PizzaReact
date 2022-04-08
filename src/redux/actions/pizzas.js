import { SET_PIZZAS } from '../types';

export const setPizzas = (array) => {
    return {
        type: SET_PIZZAS,
        payload: array,
    };
};
