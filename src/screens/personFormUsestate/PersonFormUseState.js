import React, { useState } from 'react'

const PersonFormUseState = () => {

    const [address, setAddress] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [graduate, setGraduate] = useState(false);

    const handleTextChange = e => {

        const { name, value } = e.target;

        if (name === "firstName")
            setFirstName(value);

        else if (name === "lastName")
            setLastName(value);

        else if (name === "phoneNumber")
            setPhoneNumber(value);

        else if (name === "address")
            setAddress(value);
    }

    const handleCheck = e => {
        if (e.target.name === "graduate")
            setGraduate(!graduate);
    }

    return (
        <>
            <div>
                Person Form Use State
            </div>
            <div>
                <label>First name </label>
                <input
                    name="firstName"
                    value={firstName}
                    type={"text"}
                    onChange={handleTextChange}
                />
            </div>
            <div>
                <label>Last name</label>
                <input
                    type={"text"}
                    name="lastName"
                    value={lastName}
                    onChange={handleTextChange}
                />
            </div>
            <div>
                <label>Phone number</label>
                <input
                    type={"text"}
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleTextChange}
                />
            </div>
            <div>
                <label>Address</label>
                <input
                    type={"text"}
                    name="address"
                    value={address}
                    onChange={handleTextChange}
                />
            </div>
            <div>
                <label>Graduate</label>
                <input
                    name="graduate"
                    value={graduate}
                    type={"checkbox"}
                    onChange={handleCheck}
                />
            </div>

        </>
    )
}
export default PersonFormUseState