import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";

const Categories = React.memo(function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }

    return (
    <div className="categories">
        <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
            {items && items.map((item,index) => {
                return (
                    <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${item}${index}`}>{item}</li>
                )
            })}
        </ul>
    </div>
    );
})

Categories.propTypes = {
    pizzas: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickItem: PropTypes.func.isRequired,
  };
  
  Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;