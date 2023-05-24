


import './Cart.css';
import Item from './Item/Item';
import { Context } from '../../../App';
import { useContext } from 'react';



const showOrder = (item) => {
    return (
        <div className="header__wrap__shop">
            <h2 className="header__shop__title">Shopping Cart</h2>
            <p className="header__shop__text">Checkout is almost done!</p>
            <div className="header__shop__items">
                {
                    item.card.items.map((el) => <Item key={el.id} item={el} />)
                }
                <div className="header__shop__total">
                    <p className="header__total__amount">Total amount: <span>{`${item.card.totalProducts} ptc`} </span> </p>
                    <p className="header__total__price">Total price:  <span>{`${item.card.totalPrice} $`}</span> </p>
                </div>
                <div className="header__shop__btn"><button className="header__btn-cart">Buy</button></div>
            </div>
        </div>
    );
}

const showNothing = () => {
    return (
        <div className="cart-nothing">
            <h2>You not have cart</h2>
        </div>
    );
}


function Cart(props) {
    const { dispatch, state } = useContext(Context);
    return (
        <div className={props.props ? "header__shop active" : "header__shop"}>
            {
                state.card.items.length > 0 ?
                    showOrder(state) : showNothing()
            }

        </div>

    )
}

export default Cart