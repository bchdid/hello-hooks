import { DECREMENT, INCREMENT } from "../constant/actionsType";

// Action to increment value by 1
export const increment = dispatch => () => {
    dispatch({ type: INCREMENT, value: 1 });
}

// Action to decrement value by 1
export const decrement = dispatch => () => {
    dispatch({ type: DECREMENT, value: 1 });
}