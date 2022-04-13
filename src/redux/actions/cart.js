import {
    ADD_PIZZA_CART,
    CLEAR_CART,
    REMOVE_CART_PIZZA,
    PLUS_CART_ITEM,
    MINUS_CART_ITEM,
} from '../types';

export const addPizzaToCart = (pizzaObj) => {
    return {
        type: ADD_PIZZA_CART,
        payload: pizzaObj,
    };
};

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    };
};

export const removeCartPizza = (id) => {
    return {
        type: REMOVE_CART_PIZZA,
        payload: id,
    };
};

export const plusCartItem = (id) => ({
    type: PLUS_CART_ITEM,
    payload: id,
});

export const minusCartItem = (id) => ({
    type: MINUS_CART_ITEM,
    payload: id,
});
