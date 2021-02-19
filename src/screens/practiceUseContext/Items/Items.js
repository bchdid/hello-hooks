import React, { useContext } from 'react';

import { addItem, removeItem } from "../../../actions/supermarketActions";
import { SuperMarketContext } from "../../../context/supeMarketContext";
import './styles.css';

const Items = () => {

    const { state: { items }, dispatch } = useContext(SuperMarketContext);

    return (
        <div className='supermarket-main-items'>
            {
                items.map(item => {
                    return (
                        <div key={item.id}>
                            <span>{item.name}</span> <b>{item.price}$</b>
                            <a
                                href='#fake'
                                className='supermarket-items-add'
                                onClick={addItem(item.id, dispatch)}>
                                &#10133;
                            </a>
                            <a
                                href='#fake'
                                className='supermarket-items-remove'
                                onClick={removeItem(item.id, dispatch)}>
                                &#10134;
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Items;