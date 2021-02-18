import { useState, useEffect } from 'react';
import { fetchArticles } from "../api";

/**
 * Creating custom hook to fetch articles data, get error message and loading status
 * @returns {[*[], string, boolean]}
 */
const useFetchArticles = () => {

    let [error, setError] = useState('');
    let [articles, setArticles] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArticles()
            .then(({ result, error }) => {

                    if (error)
                        setError(error);
                    else
                        setArticles(result.data.results);

                    setIsLoading(false);
                }
            )
            .catch(error => {
                    setError(error);
                    setIsLoading(false);
                }
            )
    }, [])

    return [articles, error, isLoading];
}

export default useFetchArticles;