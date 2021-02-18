import React from 'react';
import './styles.css';

/**
 * Example how to use a High order component (HOC)
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const CenterElements = ({ children }) => {
    return (
        <div className='center-elements'>
            {children}
        </div>
    )
}

export default CenterElements;