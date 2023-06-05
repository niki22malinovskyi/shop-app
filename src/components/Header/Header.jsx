import React, { useCallback, useContext, useState } from 'react';

import './Header.css';

import Logo from '../../assets/img/logo.svg';
import Cart from './Cart/Cart';
import { Context } from '../../App';

function Header() {

    const { state } = useContext(Context);

    const [popup, setPopup] = useState(false);

    const popupFunc = useCallback(
        () => {
            setPopup(!popup);
        }, [popup])
    
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__wrap__logo">
                        <a href="/#"><img src={Logo} alt="Logo" /></a>
                    </div>
                    <div className="header__wrap__btn">
                        <button
                            className="header__btn"
                            onClick={popupFunc}
                        ><span>{`${state.card.totalProducts}`}</span></button>
                    </div>
                    <Cart props={popup} />
                </div>
            </div>
        </header>
    )
}

export default Header;