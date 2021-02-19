import { ADD_ITEM, REMOVE_ITEM } from "../constant/actionsType";

export const reducer = (state, action) => {

    switch (action.type) {

        case ADD_ITEM:
            return {
                ...state,
                numberOfItems: state.numberOfItems + 1,
                totalCost: state.totalCost + state.items.find(val => val.id === action.id)?.price ?? 0
            };

        case REMOVE_ITEM:
            return {
                ...state, numberOfItems: state.numberOfItems - 1,
                totalCost: state.totalCost - state.items.find(val => val.id === action.id)?.price ?? 0
            };

        default:
            return state;
    }
}