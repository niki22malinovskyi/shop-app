import React, { useContext } from 'react';

import './Sorted.css';
import { Context } from '../../../App';


function Sorted(props) {
  const { dispatch } = useContext(Context);
  return (
    <div className={props.props ? "sorted active" : "sorted"}> 
        <div className="sorted__title">Order</div>
        <div className="sorted__btn">
        <button className="sorted__btn__up"
        onClick={() => {
          dispatch({
            type: "ascendingItems"
          })
        }
        }>Ascending</button>
        </div>
        <div className="sorted__btn">
        <button className="sorted__btn__down"
        onClick={() => {
          dispatch({
            type: "descendingItems"
          })
        }
        }>Descending</button>
        </div>
    </div>
  )
}

export default Sorted;