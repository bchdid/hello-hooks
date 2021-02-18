import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainComp from "./screens/mainComponent/MainComp";
import Addition from "./screens/addition/Addition";
import FirstFunctionComponent from "./screens/functionComponent/FirstFunctionComponent";
import FirstClassComponent from "./screens/classComponent/FirstClassComponent";
import Articles from "./screens/articles/Articles";
import CenterElements from "./hoc/centerElements/CenterElements";

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
                <Route exact path="*">
                    error
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
