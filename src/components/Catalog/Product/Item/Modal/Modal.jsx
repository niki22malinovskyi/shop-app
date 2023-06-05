import React, { useContext, useEffect } from 'react';

import './Modal.css';
import { Context } from '../../../../../App';


function Modal({ active, setActive, items }) {

    const {dispatch} = useContext(Context);

    useEffect(() => {
        if (active === true) {
            return document.body.classList.add('fix');
        } else {
            document.body.classList.remove('fix');
        }
    })

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => { setActive(false) }}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__inner__content">
                    <button className="modal__btn-close" onClick={() => { setActive(false) }}>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.29688 0.625L5.03125 4.98438L7.76562 0.625H9.52344L5.92969 6.25781L9.60938 12H7.83594L5.03125 7.55469L2.22656 12H0.453125L4.13281 6.25781L0.539062 0.625H2.29688Z" fill="#F83245" />
                        </svg>
                    </button>
                    <div className="modal__content__item">
                        <div className="modal__item__img">
                            <img src={`${items.imgUrl}`} alt={`${items.name}`} />
                        </div>
                    </div>
                    <div className="modal__content__item">
                        <h3 className="modal__item__title">{`${items.name}`}</h3>
                        <div className="modal__item__review">
                            <div className="catalog-footer__wrap">
                                <p><span>{`${items.orderInfo.reviews}%`}</span>Positive reviews</p>
                                <p><span>296</span></p>
                            </div>
                            <div className="catalog-footer__wrap">
                                <p>Above avarage</p>
                                <p>orders</p>
                            </div>
                        </div>
                        <ul className="modal__item__inner">
                            <li className="modal__inner">Color:<span>{`${items.color}`}</span></li>
                            <li className="modal__inner">Operating System:<span>{`${items.ram}`}</span></li>
                            <li className="modal__inner">Chip:<span>{`${items.chip.name}`}</span></li>
                            <li className="modal__inner">Height:<span>{`${items.size.height} cm`}</span></li>
                            <li className="modal__inner">Width:<span>{`${items.size.width} cm`}</span></li>
                            <li className="modal__inner">Depth:<span>{`${items.size.depth} cm`}</span></li>
                            <li className="modal__inner">Weight:<span>{`${items.size.weight} g`}</span></li>
                        </ul>
                    </div>
                    <div className="modal__content__item">
                        <div className="modal__item__price">{`$ ${items.price}`}</div>
                        <div className="modal__item__stock">{`Stock: ${items.orderInfo.inStock} pcs.`}</div>
                        <button className="catalog-item__button"
                            disabled={items.orderInfo.inStock ? 0 : 1}
                            onClick={
                                () => {
                                    dispatch({
                                        type: "addCart",
                                        payload: items.id
                                    })
                                }}
                        >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Modal);