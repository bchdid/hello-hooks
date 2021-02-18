import { INCREMENT } from "../constant/actionsType";

export const increment = dispatch => () => {
    dispatch({ type: INCREMENT, value: 1 });
}

export const decrement = dispatch => () => {
    dispatch({ type: INCREMENT, value: 1 });
}