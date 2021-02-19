import React from "react";
import { useHistory, Link } from "react-router-dom";

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
                    Practice useState
                </a>
            </div>
            <div>
                <a href="#fake" onClick={goToCom("practiceUseReducer")}>
                    Practice useReducer
                </a>
            </div>
            <div>
                <a href="#fake" onClick={goToCom("personFormUseState")}>
                    Person useState
                </a>
            </div>
            <div>
                {/*Example how to use Link to redirect to another page*/}
                <Link to='/personFormUseReducer'>
                    Person useReducer
                </Link>
            </div>
            <div>
                {/*Example how to use Link to redirect to another page*/}
                <Link to='/supermarket'>
                    Supermarket
                </Link>
            </div>
            <div>
                {/*Example how to use Link to redirect to another page*/}
                <Link to='/practiceUseCallback'>
                    Practice useCallBack
                </Link>
            </div>
        </>
    )
}

export default MainComp;