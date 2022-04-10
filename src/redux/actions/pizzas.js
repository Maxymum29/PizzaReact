import { SET_PIZZAS, SET_LOADED } from '../types';
import axios from 'axios';

export const setLoaded = (val) => {
    return {
        type: SET_LOADED,
        payload: val,
    };
};

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
    try {
        dispatch(setLoaded(false));
        const response = await axios.get(
            `http://localhost:3001/pizzas?${
                category !== null ? `category=${category}` : ''
            }&_sort=${sortBy.type}&_order=${sortBy.order}`,
        );
        const data = await response.data;
        dispatch(setPizzas(data));
    } catch (error) {
        console.log(error);
    }
};

export const setPizzas = (array) => {
    return {
        type: SET_PIZZAS,
        payload: array,
    };
};
