import { SET_SORT_BY, SET_CATEGORY } from '../types';

export const setFilter = ({ type, order }) => {
    return {
        type: SET_SORT_BY,
        payload: { type, order },
    };
};

export const setCategory = (index) => {
    return {
        type: SET_CATEGORY,
        payload: index,
    };
};
