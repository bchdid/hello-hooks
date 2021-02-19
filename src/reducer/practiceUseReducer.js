import { DECREMENT, INCREMENT } from "../constant/actionsType";

// Reducer function to change state value based on action type and action value
export const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, res: state.res + action.value };

        case DECREMENT:
            return { ...state, res: state.res - action.value };

        default:
            return state;
    }
};