import React from "react";
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({activeItem, items, onClickItem}) {

    return (
    <div className="categories">
        <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onClickItem(null)}>Все</li>
            {items && items.map((item,index) => {
                return (
                    <li className={activeItem === index ? 'active' : ''} onClick={() => onClickItem(index)} key={`${item}${index}`}>{item}</li>
                )
            })}
        </ul>
    </div>
    );
})

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickItem: PropTypes.func.isRequired,
  };
  
  Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;