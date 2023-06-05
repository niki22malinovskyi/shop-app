import React from 'react';
import Item from './Item/Item';

import './Product.css';





function Product({items}) {
    return (
        <main className="catalog__main">
            <ul className="catalog__list">
                { items.map(item => 
                    <Item 
                    key={item.id}
                    items={item}
                    />
                )}
            </ul>
        </main>
    )
}

export default React.memo(Product);