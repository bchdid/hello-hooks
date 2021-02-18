import axios from "axios";
import { API_KEY } from "../constant/secrets";

// Api to get most popular articles from NY times
export const fetchArticles = async () => {
    let result = [];
    let error = null;

    try {
        result = await axios(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`);
    } catch (e) {
        error = e;
    }

    return { result, error };
}