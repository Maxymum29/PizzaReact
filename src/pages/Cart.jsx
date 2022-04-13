import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import GlobalIconsSvg from '../assets/icons/Global-Icons/GlobalIconsSvg';
import Button from '../components/Button';
import cartEmptyImage from '../assets/img/empty-cart.png';
import CartItem from '../components/CartItem';
import { clearCart, removeCartPizza, plusCartItem, minusCartItem } from '../redux/actions/cart';

const Cart = () => {
  const dispatch = useDispatch()
  const {items, totalPrice, totalCount} = useSelector(({cart}) => cart);

  const addedPizzas = Object.keys(items).map(key => {
    return items[key].items[0]
  })

  const onCleareCart = () => {
    if(window.confirm('Вы хотите отчистить корзину')) {
      dispatch(clearCart());
    }
  }

  const onRemove = (id) => {
    dispatch(removeCartPizza(id))
  }

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id))
  }

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id))
  }

  const onClickOrder = () => {
    
  }

    return (
        <div className="container container--cart">
      {totalCount ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <GlobalIconsSvg id='cart'/>
              Корзина
            </h2>
            <div onClick={onCleareCart} className="cart__clear">
              <GlobalIconsSvg id='cart_clear'/>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="content__items">
            {addedPizzas.map((pizza) => (
              <CartItem
                key={pizza.id}
                id={pizza.id}
                img = {pizza.imageUrl}
                name={pizza.name}
                type={pizza.type}
                size={pizza.size}
                totalPrice={items[pizza.id].totalPrice}
                totalCount={items[pizza.id].items.length}
                onRemove={() => onRemove(pizza.id)}
                onMinus={ () => onMinusItem(pizza.id)}
                onPlus={ () => onPlusItem(pizza.id)}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <a href="/" className="button button--outline button--add go-back-btn">
               <GlobalIconsSvg id='cart_back_arrow'/>
                <address to="/">
                  <span>Вернуться назад</span>
                </address>
              </a>
              <Button onClick={onClickOrder} className="pay-btn">
                <span>Оплатить сейчас</span>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <i>😕</i>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={cartEmptyImage} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;