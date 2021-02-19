import React from "react";
import { useHistory } from "react-router-dom"

const MainComp = () => {

    const history = useHistory();

    const goToCom = myPath => e => {
        e.preventDefault()
        history.push(`/${myPath}`);
    }

    return (
        <>
            <div> HomePage</div>
            <div>
                <a href="#fake" onClick={goToCom("addition")}>
                    addition
                </a>
            </div>
            <div>
                <a href="#fake" onClick={goToCom("classComp")}>
                    Class
                </a>
            </div>
            <div>
                <a href="#fake" onClick={goToCom("functionComp")}>
                    Function
                </a>
            </div>
            <div>
                <a href="#fake" onClick={goToCom("articles")}>
                    Articles
                </a>
            </div>
            <div>
                <a href="#fake" onClick={goToCom("practiceUseState")}>
                    Practice Use State
                </a>
            </div>
            <div>
                <a href="#fake" onClick={goToCom("practiceUseReducer")}>
                    Practice Use Reducer
                </a>
            </div>
        </>

    )
}

export default MainComp;