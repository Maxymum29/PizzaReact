import React, { useEffect, useRef, useState } from "react";
import GlobalIconsSvg from "../assets/icons/Global-Icons/GlobalIconsSvg";

const SortPopup = React.memo(function SortPopup ({items}){
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const sortRef = useRef();
    const activeLabel = items[activeItem].name;

    const onSelectItem = (index) => {
        setActiveItem(index)
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
                    <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${item.type}${index}`}>{item.name}</li>
                  )
              })}
          </ul>
        </div>}
      </div>
    );
})

export default SortPopup;