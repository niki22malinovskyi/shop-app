
import React, { useContext, useState } from 'react';
import Aside from './Aside/Aside';
import Product from './Product/Product';

import Sort from '../../assets/img/sort.svg';

import './Catalog.css';
import Sorted from './Sorted/Sorted';
import { Context } from '../../App';

function Catalog() {


  const [sort, setSort] = useState(false);

  const popup = () => {
    return setSort(!sort);

  }




  const { dispatch, state } = useContext(Context);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__search">
          <div className="catalog__search__wrap">
            <input type="text"
              className="catalog__search__input"
              placeholder="Enter device name..."
              onChange={e => {
                dispatch({
                  type: "addFilters",
                  payload: {
                    filterName: 'search',
                    value: {
                      value: e.target.value
                    }
                  }
                })
              }} />
            <i className="search-icon"></i>
            <button className="catalog__search__order" onClick={popup}>
              <img src={Sort} alt="Sort" />
            </button>
            <Sorted props={sort} />
          </div>
          <button className="catalog__search__btn" onClick={() => {
            dispatch({
              type: "filteredItems"
            })}}
            
          >poshuk</button>
        </div>
        <div className="catalog__wrap">
          <Aside />
          <Product items={state.product} />
        </div>

      </div>
    </section>
  )
}

export default Catalog;