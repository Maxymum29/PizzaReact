import { useSelector, useDispatch } from 'react-redux';
import { setPizzas } from '../redux/actions/pizzas';
import axios from 'axios';

const useServer = () => {
    const dispatch = useDispatch();
    const pizzas = useSelector((state) => state.pizzas.items);

    const getPizzasData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/pizzas');
            const data = await response.data;
            dispatch(setPizzas(data));
        } catch (error) {
            console.log(error);
        }
    };

    return [pizzas, getPizzasData];
};

export default useServer;
