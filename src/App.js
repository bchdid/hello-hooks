import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Articles from "./screens/articles/Articles";
import Addition from "./screens/addition/Addition";
import MainComp from "./screens/mainComponent/MainComp";
import CenterElements from "./hoc/centerElements/CenterElements";
import SuperMarket from "./screens/practiceUseContext/Supermarket";
import FirstClassComponent from "./screens/classComponent/FirstClassComponent";
import PersonFormUseState from "./screens/personFormUsestate/PersonFormUseState";
import PracticeUseCallBack from "./screens/practiceUseCallBack/PracticeUseCallBack";
import PersonFormUseReducer from "./screens/personFormUseReduser/PersonFormUseReducer";
import FirstFunctionComponent from "./screens/functionComponent/FirstFunctionComponent";
import PracticeUseState from "./screens/stateManagement/paracticeUseState/PracticeUseState";
import PracticeUseReducer from "./screens/stateManagement/paracticeUseReducer/PracticeUseReducer";

/**
 * Main App
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <CenterElements>
                        <MainComp />
                    </CenterElements>
                </Route>
                <Route exact path="/addition">
                    <Addition />
                </Route>
                <Route exact path="/functionComp">
                    <FirstFunctionComponent />
                </Route>
                <Route exact path="/classComp">
                    <FirstClassComponent />
                </Route>
                <Route exact path="/articles">
                    <Articles />
                </Route>
                <Route exact path="/practiceUseState">
                    <CenterElements>
                        <PracticeUseState />
                    </CenterElements>
                </Route>
                <Route exact path="/practiceUseReducer">
                    <CenterElements>
                        <PracticeUseReducer />
                    </CenterElements>
                </Route>
                <Route exact path="/personFormUseState">
                    <CenterElements>
                        <PersonFormUseState />
                    </CenterElements>
                </Route>
                <Route exact path="/personFormUseReducer">
                    <CenterElements>
                        <PersonFormUseReducer />
                    </CenterElements>
                </Route>
                <Route exact path="/supermarket">
                    <CenterElements>
                        <SuperMarket />
                    </CenterElements>
                </Route>
                <Route exact path="/practiceUseCallback">
                    <CenterElements>
                        <PracticeUseCallBack />
                    </CenterElements>
                </Route>
                <Route exact path="*">
                    error
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
