import { SET_SORT_BY, SET_CATEGORY } from '../types';

export const setFilter = (name) => {
    return {
        type: SET_SORT_BY,
        payload: name,
    };
};

export const setCategory = (index) => {
    return {
        type: SET_CATEGORY,
        payload: index,
    };
};
