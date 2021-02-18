import React, { useState, useEffect } from 'react';
import Detail from "./Detail";
import axios from "axios";

const FirstFunctionComponent = () => {

    let [count, setCount] = useState(0);
    let [randomNumber, setRandomNumber] = useState(0);
    let [showComponentDetail, setShowComponentDetail] = useState(false);

    const fetchArticles = () => {
        try {
            const API_KEY = 'CDSNAiFyxiaylxDzfjLVc3VCkoAjJPLA';
            axios(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`)
                .then( res =>{
                    console.log("res",res.data )
                }
                )
                .catch( error =>{
                        console.log("error",error )
                    }
                )
        } catch (error) {
            console.log("error",error )
        }
    }

    // Like componentDidMount
    useEffect(() => {
        setCount(10);
        // fetchArticles()
        //     .then(result =>{
        //         console.log("result",result )
        //     })
        //     .catch(error =>{
        //         console.log("error",error )
        //     })
    }, [])

    // Like componentDidUpdate
    useEffect(() => {
        // Execute this block of code when count changes
        setRandomNumber(Math.random() * 10);
        fetchArticles()
    }, [count])

    // Like componentWillUnmount
    useEffect(() => {
        return () => {
            console.log("By from first function comp");
        }
    }, [])

    useEffect(() => {
        console.log("this block of code will be always executed");
    })

    const handleButton = () => {
        setCount(++count);
    }

    const toggleDetail = () => {
        setShowComponentDetail(!showComponentDetail);
    }

    return (
        <>
            <div>
                Hello from function component
            </div>
            <button onClick={handleButton}>
                CLick me
            </button>
            <div>
                Count: {count}
            </div>
            <div>
                RandomNumber : {randomNumber}
            </div>
            <div>
                <button onClick={toggleDetail}>
                    Show details
                </button>
            </div>
            {
                showComponentDetail &&
                <Detail count={count} />
            }
        </>
    )
}

export default FirstFunctionComponent;