import React, { useReducer } from 'react'

import { reducer } from "../../reducer/personFormUseReducer";
import { setFirstName, setLastName, setPhoneNumber, setAddress, setGraduate } from "../../actions/personFormActions";

const initState = {
    address: "",
    lastName: "",
    firstName: "",
    phoneNumber: "",
    graduate: false,
}

const PersonFormUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initState, undefined);

    return (
        <>
            <div>
                Person Form Use Reducer
            </div>
            <div>
                <label>First name </label>
                <input
                    type={"text"}
                    name="firstName"
                    value={state.firstName}
                    onChange={setFirstName(dispatch)}
                />
            </div>
            <div>
                <label>Last name</label>
                <input
                    type={"text"}
                    name="lastName"
                    value={state.lastName}
                    onChange={setLastName(dispatch)}
                />
            </div>
            <div>
                <label>Phone number</label>
                <input
                    type={"text"}
                    name="phoneNumber"
                    value={state.phoneNumber}
                    onChange={setPhoneNumber(dispatch)}
                />
            </div>
            <div>
                <label>Address</label>
                <input
                    type={"text"}
                    name="address"
                    value={state.address}
                    onChange={setAddress(dispatch)}
                />
            </div>
            <div>
                <label>Graduate</label>
                <input
                    name="graduate"
                    type={"checkbox"}
                    value={state.graduate}
                    onChange={setGraduate(dispatch)}
                />
            </div>
        </>
    )
}
export default PersonFormUseReducer