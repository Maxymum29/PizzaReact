import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Categories, PizzaBlock, SortPopup } from "../components";
import {setCategory} from '../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const categorySort = [
    {name: 'популярности', type: 'popular'}, 
    {name: 'цене', type: 'price'}, 
    {name: 'алфавиту', type: 'alphabet'}
];

const Home = ({pizzas}) => {
    const dispatch = useDispatch();

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categoryNames} />
                <SortPopup items={categorySort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas && pizzas.map(pizza => {
                    return (
                        <PizzaBlock key={pizza.id} pizza={pizza}/>
                    )
                })}
               
            </div>
        </div>
    );
};

export default Home;