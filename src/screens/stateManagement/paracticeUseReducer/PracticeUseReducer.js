import React, { useReducer } from "react";
import { reducer } from "../../../reducer/practiceUseReducer";
import { decrement, increment } from "../../../actions/practiveUseReducerActions";

// Initial component state
export const initState = {
    res: 0,
}

/**
 * Component to practice how to use useReducer
 * @returns {JSX.Element}
 * @constructor
 */
const PracticeUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initState, undefined);

    return (
        <>
            <button onClick={increment(dispatch)}>
                Increment
            </button>
            <button onClick={decrement(dispatch)}>
                Decrement
            </button>
            <div>
                res: {state.res}
            </div>
        </>
    )
}

export default PracticeUseReducer;