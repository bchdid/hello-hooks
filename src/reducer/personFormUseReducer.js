import { SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE_NUMBER, SET_ADDRESS, SET_GRADUATE } from "../constant/actionsType";

export const reducer = (state, action) => {

    switch (action.type) {
        case SET_FIRST_NAME:
            return { ...state, firstName: action.payload.value };

        case SET_LAST_NAME:
            return { ...state, lastName: action.payload.value };

        case SET_PHONE_NUMBER:
            return { ...state, phoneNumber: action.payload.value };

        case SET_ADDRESS:
            return { ...state, address: action.payload.value };

        case SET_GRADUATE:
            return { ...state, graduate: !state.graduate };

        default :
            return state;
    }
}
