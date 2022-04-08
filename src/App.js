import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import useServer from './hooks/useServer';
import { Header } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
    const [pizzas, getPizzasData] = useServer();

    useEffect(() => {
        getPizzasData();
    }, []);
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home pizzas={pizzas} />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
