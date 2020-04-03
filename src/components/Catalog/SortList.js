import React, { useState, useRef, useEffect } from 'react';

function SortList({ sortTypes, sortType, setSortType }) {
  const [openList, setOpenList] = useState(false);
  const sortListRef = useRef();

  const handleClickOutside = e => {
    if (sortListRef.current && !sortListRef.current.contains(e.target)) {
      setOpenList(false)
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside);
    return () => {
      window.removeEventListener('mouseup', handleClickOutside);
    }
  }, [sortListRef]);

  return (
    <div className={openList ? 'catalog-header__sort_open' : 'catalog-header__sort'}>
      <span>Сортировка по: </span>
      <span 
        className="catalog-header__sort-type"
        onClick={() => setOpenList(!openList)}
      >
        {sortType.name}
      </span>
      {openList &&
        <ul className="catalog-header__sort-list" ref={sortListRef}>
          {
            sortTypes.map(type => {
              const active = type.id === sortType.id;

              return (
                <li 
                  key={type.id} 
                  className={active ? "catalog-header__sort-item_active" : "catalog-header__sort-item"}
                  onClick={() => {
                    setOpenList(false);
                    setSortType(type);
                  }}
                >
                  {type.name}
                </li>
              )
            })
          }
        </ul>
      }
    </div>
  )
}

export default SortList;
