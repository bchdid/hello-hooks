import React from "react"

import Article from "./article/Article";
import useFetchArticles from "../../hooks/useFetchArticles";
import { IS_LOADING_MESSAGE, NO_RESULT_FOUND } from "../../constant/messages";

/**
 * Component to display articles using NY times api
 * @returns {JSX.Element}
 * @constructor
 */
const Articles = () => {

    // Creating custom hooks to get articles, get error and loading status
    const [articles, error, isLoading] = useFetchArticles();

    // If loading return specific message
    if (isLoading)
        return <div>{IS_LOADING_MESSAGE}</div>;

    // If error return specific error message
    if (error)
        return <div>{error.message}</div>;

    // If no articles found, display no result found message
    if (articles.length === 0)
        return <div>{NO_RESULT_FOUND}</div>;

    // If articles found
    return (
        <>
            {
                articles.map(article => {
                    return (
                        <Article
                            key={article.id}
                            title={article.title}
                            abstract={article.abstract}
                        />
                    )
                })
            }
        </>
    )
}

export default Articles