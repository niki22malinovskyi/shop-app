
import React, { useState, useRef, useEffect } from 'react';



function Accordion({children, props}) {

    const [toggle, setToggle] = useState(false);

    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, []);

  return (
        <div className="catalog__aside__item">
            <button
                className="catalog__item__button btn-ctlg"
                onClick={() => { setToggle(!toggle) }}
            >{props.name}</button>
            <div
                className={toggle ? "catalog__item__body animated" : "catalog__item__body"}
                style={{ height: toggle ? `${heightEl}` : '0px' }}
                ref={refHeight}
            >{ children}
            </div>
        </div>
  );
}

export default Accordion;