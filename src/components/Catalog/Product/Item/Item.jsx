import React, { useContext, useState } from 'react';

import './Item.css';
import Modal from './Modal/Modal';
import { Context } from '../../../../App';


function Item({ items }) {
    const [modalActive, setModalActive] = useState(false);

    const {dispatch} = useContext(Context);
    
    return (
        <>
            <li className="catalog__list__item" >
                <div className="catalog-item" onClick={() => setModalActive(!modalActive)}>
                    <div className="catalog-item__img">
                        <img src={`${items.imgUrl}`} alt={`${items.name}`} />
                    </div>
                    <h3 className="catalog-item__title">{`${items.name}`}</h3>
                    <p className="catalog-item__stock"> <span>{`${items.orderInfo.inStock}`}</span> left in stock</p>
                    <p className="catalog-item__price">Price: <span>{`${items.price}`}</span>$</p>
                    <button className="catalog-item__button"
                        disabled={items.orderInfo.inStock ? 0 : 1}
                        onClick={
                            (e) => {
                                console.log(items)
                                e.stopPropagation();
                                dispatch({
                                    type: "addCart",
                                    payload: items.id
                                })
                            }}
                    >Add to cart</button>
                    <div className="catalog-item__footer">
                        <div className="catalog-footer__wrap">
                            <p><span>{`${items.orderInfo.reviews}%`}</span>Positive reviews</p>
                            <p><span>296</span></p>
                        </div>
                        <div className="catalog-footer__wrap">
                            <p>Above avarage</p>
                            <p>orders</p>
                        </div>
                    </div>
                </div>
            </li>
            <Modal active={modalActive} setActive={setModalActive} items={items} ></Modal>
        </>


    )
}

export default Item;