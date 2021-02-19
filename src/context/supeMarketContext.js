import React, { createContext, useReducer } from 'react';
import { reducer } from "../reducer/supermarketReducer";

const initState = {
    totalCost: 0,
    numberOfItems: 0,
    items: [
        { id: 1, name: 'Tomato', price: 10, },
        { id: 2, name: 'Cucumber', price: 5, },
        { id: 3, name: 'Potato', price: 15, },
        { id: 4, name: 'Watermelon', price: 20, }
    ]
}

export const SuperMarketContext = createContext(initState);

export const SupermarketProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initState, undefined);

    return (
        <SuperMarketContext.Provider value={{ state, dispatch }}>
            {children}
        </SuperMarketContext.Provider>
    )
}

