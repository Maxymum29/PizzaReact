import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import filters from './reducers/filters';
import pizzas from './reducers/pizzas';
import cart from './reducers/cart';

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
});

const enhancersCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, enhancersCompose(applyMiddleware(thunk)));

export default store;
