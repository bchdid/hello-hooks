import React, { useState } from "react";

const PracticeUseState = () => {

    const secNum = 2;

    let [res, setRes] = useState(0);
    let [firstNum, setFirstNum] = useState(0);

    // Get result for a calculation
    const equalAddi = () => {
        setRes(firstNum + secNum);
    }

    // Add value +1
    const incFirst = () => {
        setFirstNum(++firstNum);
    }

    // Minus value -1
    const decFirst = () => {
        setFirstNum(--firstNum);
    }

    return (
        <>
            <div>
                {firstNum} + {secNum} &nbsp;
                <button onClick={equalAddi}>=</button>
                &nbsp; {res}
            </div>
            <br />
            <div>
                <button onClick={incFirst}>
                    +
                </button>
                <button onClick={decFirst}>
                    -
                </button>
            </div>
            <br />
        </>
    )
}

export default PracticeUseState;