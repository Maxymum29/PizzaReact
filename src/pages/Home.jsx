import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Categories, PizzaBlock, SortPopup } from "../components";
import ContentLoader from "react-content-loader"
import { fetchPizzas } from '../redux/actions/pizzas';
import {addPizzaToCart} from '../redux/actions/cart' 
import {setCategory, setFilter} from '../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const categorySort = [
    {name: 'популярности', type: 'popular', order: 'desc'}, 
    {name: 'цене', type: 'price', order: 'desc'}, 
    {name: 'алфавиту', type: 'name', order: 'asc'}
];

const Home = () => {
    const dispatch = useDispatch();
    const pizzas = useSelector((state) => state.pizzas.items);
    const cartItems = useSelector((state) => state.cart.items);
    const loading = useSelector((state) => state.pizzas.isLoading);
    const {category, sortBy} = useSelector((state) => state.filters);


    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSort = useCallback((name) => {
        dispatch(setFilter(name))
    }, [])

    const onAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    useEffect(() => {
        
        dispatch(fetchPizzas(category, sortBy));
        
    }, [dispatch, category, sortBy]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeItem={category} onClickItem={onSelectCategory} items={categoryNames} />
                <SortPopup activeSort={sortBy.type} items={categorySort} onClickSort={onSelectSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {loading 
                    ? pizzas.map(pizza => {
                        return (
                            <PizzaBlock 
                                onClickAddPizza={onAddPizzaToCart} 
                                inCartCount={cartItems[pizza.id] && cartItems[pizza.id].items.length} 
                                key={pizza.id} 
                                pizza={pizza}
                            />
                        )
                    })
                    : Array(10).fill(0).map((_, index) => (
                        <ContentLoader 
                            key={index}
                            className="pizza-block"
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            >
                            <circle cx="132" cy="142" r="115" />
                            <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
                            <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
                            <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
                            <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
                        </ContentLoader>
                    ))
                }
          
            </div>
        </div>
    );
};

export default Home;