import React from 'react';
import Items from "./Items/Items";
import Summary from "./summary/Summary";

import './styles.css';
import { SupermarketProvider } from "../../context/supeMarketContext";

const SuperMarket = () => {
    return (
        <div className='supermarket-main'>
            <div className='supermarket-title'>
                <b>Supermarket</b>
            </div>

            <SupermarketProvider>
                <Summary />
                <Items />
            </SupermarketProvider>
        </div>
    )
}

export default SuperMarket;