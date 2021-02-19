import React, { useContext } from 'react';

import { SuperMarketContext } from "../../../context/supeMarketContext";
import './styles.css';

const Summary = () => {

    const { state: { totalCost, numberOfItems } } = useContext(SuperMarketContext);

    return (
        <div className='supermarket-summary-main'>
            <div>
                Total Cost: <b>{totalCost}</b> &#128178;
            </div>
            <div>
                Total Number Of Items: <b>{numberOfItems}</b> &#128722;
            </div>
        </div>
    )
}

export default Summary;