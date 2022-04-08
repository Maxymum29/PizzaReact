import GlobalIconsSvg from '../assets/icons/Global-Icons/GlobalIconsSvg';
import logo_pizza from '../assets/img/pizza-logo.svg';
import Button from './Button';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
               <Link to='/'>
                    <div className="header__logo">
                        <img style={{width: 30}} src={logo_pizza} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
               </Link>
                <div className="header__cart">
                    <Link to='/cart'>
                        <Button className='button--cart'>
                            <span>520 ₽</span>
                            <div className="button__delimiter"></div>
                            <GlobalIconsSvg id='cart'/>
                            <span>3</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;