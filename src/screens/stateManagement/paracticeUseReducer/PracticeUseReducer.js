import React, { useReducer } from "react";
import { decrement, increment } from "../../../actions/practiveUseReducer";
import { reducer } from "../../../reducer/practiceUseReducer/practiceUseReducer";

export const initState = {
    res: 0,
}

const PracticeUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initState);

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