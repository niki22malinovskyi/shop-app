import React, { useContext } from 'react';

import { Context } from '../../../../App';

function Item({ item }) {

    const { dispatch } = useContext(Context);


    return (
        <div className="header__shop__item">
            <div className="header__item__device">
                <div className="header__device__photo">
                    <img src={`${item.imgUrl}`} alt="device" />
                </div>
                <div className="header__device__inner">
                    <h4 className="header__device__title">{`${item.name}`}</h4>
                    <p className="header__device__price"><span>${`${item.price}`}</span></p>
                </div>
            </div>
            <div className="header__shop__inner">
                <div className="header__item__btn">
                    <button className="header__btn-some btn__minus" onClick={() => {
                        dispatch({
                            type: "diffAmount",
                            payload: item.id
                        })
                    }}></button>
                    <p>{`${item.counter}`}</p>
                    <button className="header__btn-some btn__plus" onClick={() => {
                        dispatch({
                            type: "addCart",
                            payload: item.id
                        })
                    }
                    }></button>
                </div>
                <button className="header__btn-del btn__delete"
                    onClick={() =>
                        dispatch({
                        type: 'deleteOrder',
                        payload: item.id,
                    })}
                ></button>
            </div>
        </div>
    )
}

export default React.memo(Item);