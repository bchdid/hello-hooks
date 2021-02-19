import { SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE_NUMBER, SET_ADDRESS, SET_GRADUATE } from "../constant/actionsType";

export const setFirstName = dispatch => (e) => {
    dispatch({ type: SET_FIRST_NAME, payload: { value: e.target.value } })
}

export const setLastName = dispatch => (e) => {
    dispatch({ type: SET_LAST_NAME, payload: { value: e.target.value } })
}

export const setPhoneNumber = dispatch => (e) => {
    dispatch({ type: SET_PHONE_NUMBER, payload: { value: e.target.value } })
}

export const setAddress = dispatch => (e) => {
    dispatch({ type: SET_ADDRESS, payload: { value: e.target.value } })
}

export const setGraduate = dispatch => (e) => {
    dispatch({ type: SET_GRADUATE, payload: { value: e.target.value } })
}