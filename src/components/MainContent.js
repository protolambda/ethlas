import {Switch, Route} from 'react-router-dom';
import React from "react";
import Graph from "./screens/Graph";
import About from "./screens/About";
import ScrollToTop from "./util/ScrollToTop";
import connect from "react-redux/es/connect/connect";
import dataAT from "../reducers/data/at";

const MainContent = ({dispatch, src}) => {
    return (
        <main>
            <ScrollToTop/>
            <Switch>
                <Route exact path='/' component={Graph}/>
                <Route exact strict={false} path='/:repoOwner/:repoName' render={({match, ...remainingProps}) => {
                    const repoOwner = match.params["repoOwner"];
                    const repoName = match.params["repoName"];
                    // Load the data if we haven't already.
                    if (repoOwner && repoOwner.length > 0 &&
                        repoName && repoName.length >= 0 &&
                        `${repoOwner}/${repoName}` !== src) {
                        dispatch({
                            type: dataAT.LOAD_DATA,
                            src
                        })
                    }

                    return (<Graph {...remainingProps}/>)
                }}/>
                <Route exact strict={false} path='/about' component={About}/>
            </Switch>
        </main>
    );
};

const ConnectedMainContent = connect(state => ({
    src: state.data.src
}))(MainContent);


export default ConnectedMainContent;
