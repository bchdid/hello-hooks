import { ADD_ITEM, REMOVE_ITEM } from "../constant/actionsType";

export const addItem = (id, dispatch) => e => {
    e.preventDefault();

    dispatch({ type: ADD_ITEM, id });
}

export const removeItem = (id, dispatch) => e => {
    e.preventDefault();

    dispatch({ type: REMOVE_ITEM, id });
}