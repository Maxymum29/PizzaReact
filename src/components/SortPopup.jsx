import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import GlobalIconsSvg from "../assets/icons/Global-Icons/GlobalIconsSvg";

const SortPopup = React.memo(function SortPopup ({items, activeSort, onClickSort}){
    const [visiblePopup, setVisiblePopup] = useState(false);
    const sortRef = useRef();
    const activeLabel = items.find(obj => obj.type === activeSort).name

    const onSelectItem = (index) => {
        onClickSort(index)
        setVisiblePopup(false)
    }

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div ref={sortRef} className="sort">
        <div className="sort__label">
         <GlobalIconsSvg className={visiblePopup ? 'rotated' : ''} id='sort_logo'/>
          <b>Сортировка по:</b>
          <span onClick={toggleVisiblePopup}>{activeLabel}</span>
        </div>
        { visiblePopup &&  
        <div className="sort__popup">
          <ul>
              {items && items.map((item, index) => {
                  return (
                    <li 
                        className={activeSort === item.type ? 'active' : ''} 
                        onClick={() => onSelectItem(item)} 
                        key={`${item.type}${index}`}
                    >
                        {item.name}
                    </li>
                  )
              })}
          </ul>
        </div>}
      </div>
    );
})

SortPopup.propTypes = {
    activeSort: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickSort: PropTypes.func.isRequired,
  };
  
  SortPopup.defaultProps = {
    items: [],
  };

export default SortPopup;