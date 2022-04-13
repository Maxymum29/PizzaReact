
import GlobalIconsSvg from "../assets/icons/Global-Icons/GlobalIconsSvg";
import Button from "./Button";

const CartItem = ({name, type, size, img, totalPrice, totalCount, onRemove, onMinus, onPlus}) => {
    return (
        <div className="cart__item">
        <div className="cart__item-img">
          <img
            className="pizza-block__image"
            src={img}
            alt="Pizza"
          />
        </div>
        <div className="cart__item-info">
          <h3>{name}</h3>
          <p>
            {type} тесто, {size} см.
          </p>
        </div>
        <div className="cart__item-count">
          <div
            onClick={onMinus}
            className="button button--outline button--circle cart__item-count-minus">
                <GlobalIconsSvg id='minus'/>
          </div>
          <b>{totalCount}</b>
          <div
            onClick={onPlus}
            className="button button--outline button--circle cart__item-count-plus">
                <GlobalIconsSvg id='plus'/>
          </div>
        </div>
        <div className="cart__item-price">
          <b>{totalPrice}₽</b>
        </div>
        <div className="cart__item-remove">
          <Button onClick={onRemove} className="button--circle button--outline">
           <GlobalIconsSvg id='cart_remove'/>
          </Button>
        </div>
      </div>
    );
};

export default CartItem;