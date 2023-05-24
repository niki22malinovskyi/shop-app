
import Accordion from './Accordion/Acordion';

import './Aside.css';

import items from '../../../assets/items/items';
import { Context } from '../../../App';
import { useContext } from 'react';




const filters = {
    color: [],
    storage: [],
    os: [],
    display: []
}


function test(item) {
    item.forEach((el) => {
        Object.entries(el).forEach(([key, value]) => filters[key] ? filters[key] = [...filters[key], value] : "");
        Object.entries(filters).forEach(([key, value]) => filters[key] = [...new Set(value.flat())]);
    });
}


test(items);



function Aside() {

    const { dispatch, state } = useContext(Context);


    return (
        <aside className="catalog__aside">
            <div className="catalog__aside__block">
                <Accordion props={{ name: 'Price' }}>
                    <div className="catalog__body__price">
                        <label htmlFor="from">From<input type="text" id="from" onChange={e => {
                            let temp = e.target.value;
                            dispatch({
                                type: 'addFilters',
                                payload: {
                                    filterName: 'price',
                                    value: {
                                        from: temp
                                    }
                                }
                            })
                        }} /></label>
                        <label htmlFor="to">To<input type="text" id="to" onChange={e => {
                            let temp = e.target.value;
                            dispatch({
                                type: 'addFilters',
                                payload: {
                                    filterName: 'price',
                                    value: {
                                        to: temp
                                    }
                                }
                            })
                        }} /></label>
                    </div>
                </Accordion>
                <Accordion props={{ name: 'Color' }}>
                    <div className="catalog__body">
                        {
                            filters.color.map((el, i) =>
                                <div className="catalog__body__item" key={i}>
                                    <input className="custom-checkbox" type="checkbox" id={i}
                                        onChange={
                                            (e) => {
                                                
                                                if (e.target.checked) {
                                                    return dispatch({
                                                        type: 'addFilters',
                                                        payload: {
                                                            filterName: 'color',
                                                            value: {
                                                                value: state.filters.color.value ? [...state.filters.color.value, el] : [el]
                                                            }
                                                        }
                                                    })
                                                } else {
                                                    return dispatch({
                                                        type: 'removeFilters',
                                                        payload: {
                                                            filterName: 'color',
                                                            value: el
                                                        }
                                                    })
                                                }
                                                
                                            }
                                        } />
                                    <label htmlFor={i}>{el}</label>
                                </div>
                            )
                        }
                    </div>
                </Accordion>
                <Accordion props={{ name: 'Memory' }}>
                    <div className="catalog__body">
                        {
                            filters.storage.map((el, i) => el !== null ?
                                <div className="catalog__body__item" key={100 + i}>
                                    <input className="custom-checkbox" type="checkbox" id={100 + i} onChange={
                                        (e) => {
                                            
                                            if (e.target.checked) {
                                                return dispatch({
                                                    type: 'addFilters',
                                                    payload: {
                                                        filterName: 'storage',
                                                        value: {
                                                            value: state.filters.storage.value ? [...state.filters.storage.value, el] : [el]
                                                        }
                                                    }
                                                })
                                            } else {
                                                return dispatch({
                                                    type: 'removeFilters',
                                                    payload: {
                                                        filterName: 'storage',
                                                        value: el
                                                    }
                                                })
                                            }

                                        }
                                    } />
                                    <label htmlFor={100 + i}>{el}</label>
                                </div>
                                : ''
                            )
                        }
                    </div>
                </Accordion>
                <Accordion props={{ name: 'OS' }}>
                    <div className="catalog__body-inner">
                        {
                            filters.os.map((el, i) => el !== null ?
                                <div className="catalog__body__item" key={200 + i}>
                                    <input className="custom-checkbox" type="checkbox" id={200 + i} onChange={
                                        (e) => {
                                            if (e.target.checked) {
                                                return dispatch({
                                                    type: 'addFilters',
                                                    payload: {
                                                        filterName: 'os',
                                                        value: {
                                                            value: state.filters.os.value ? [...state.filters.os.value, el] : [el]
                                                        }
                                                    }
                                                })
                                            } else {
                                                return dispatch({
                                                    type: 'removeFilters',
                                                    payload: {
                                                        filterName: 'os',
                                                        value: el
                                                    }
                                                })
                                            }

                                        }
                                    } />
                                    <label htmlFor={200 + i}>{el}</label>
                                </div>
                                : ''
                            )
                        }
                    </div>

                </Accordion>
                <Accordion props={{ name: 'Display' }} >
                    <div className="catalog__body-inner">
                        {
                            filters.display.map((el, i) => el !== null ?
                                <div className="catalog__body__item" key={300 + i}>
                                    <input className="custom-checkbox" type="checkbox" id={300 + i} onChange={
                                        (e) => {
                                            if (e.target.checked) {
                                                return dispatch({
                                                    type: 'addFilters',
                                                    payload: {
                                                        filterName: 'display',
                                                        value: {
                                                            value: state.filters.display.value ? [...state.filters.display.value, el] : [el]
                                                        }
                                                    }
                                                })
                                            } else {
                                                return dispatch({
                                                    type: 'removeFilters',
                                                    payload: {
                                                        filterName: 'display',
                                                        value: el
                                                    }
                                                })
                                            }

                                        }
                                    } />
                                    <label htmlFor={300 + i}>{el}</label>
                                </div>
                                : ''
                            )
                        }
                    </div>

                </Accordion>
            </div>
        </aside>
    );

}

export default Aside;