import React from "react";

/**
 * Component to display each article
 * @param title
 * @param abstract
 * @returns {JSX.Element}
 * @constructor
 */
const Article = ({ title, abstract }) => {

    return (
        <>
            <div style={{ color: 'red' }}><b>{title}</b></div>
            <div>{abstract}</div>
            l <br />
        </>
    )
}

export default Article;