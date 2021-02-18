import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Primitive variables: String, int, boolean, undefined
// Non-Primitive variables: Object, array, function

const Addition = () => {
    const history = useHistory();

    let [res, setRes] = useState(0);
    let [secNum, setSecNum] = useState(0);
    let [firstNum, setFirstNum] = useState(0);

    // Primitive variable
    const a = 5;

    // Non-Primitive variable
    const person = {
        name: 'bassem',
        lastName: 'chdid',
    };

    // Like component did mount
    useEffect(() => {
        setSecNum(2);
        setFirstNum(1);
    }, [])

    // Like component did update
    useEffect(() => {
        // Execute this block of code when firstNum OR secNum changes
        setRes(firstNum + secNum);
    }, [firstNum, secNum])

    // Primitive variable useEffect
    useEffect(() => {
        // Execute this block of code when 'a' changes
        console.log("Primitive variables");
    }, [a])

    // Non-Primitive variable useEffect
    useEffect(() => {
        // Execute this block of code when person changes
        console.log("Non primitive variables");
    }, [person])

    const equalAddi = () => {
        setRes(firstNum + secNum)
    }
    const incFirst = () => {
        setFirstNum(++firstNum)
    }
    const decFirst = () => {
        setFirstNum(--firstNum)
    }

    const pathCallBack = () => {
        history.goBack()
    }

    return (
        <>
            <div>
                {firstNum} + {secNum} &nbsp;
                <button onClick={equalAddi}>=</button>
                {res}
            </div>
            <br/>
            <div>
                <button onClick={incFirst}>
                    +
                </button>
                <button onClick={decFirst}>
                    -
                </button>
            </div>
            <br/>
            <div>
                <button onClick={pathCallBack}>
                    Go back
                </button>
            </div>
        </>
    )
}

export default Addition;