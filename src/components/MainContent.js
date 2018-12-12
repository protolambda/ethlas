import {Switch, Route} from 'react-router-dom';
import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import ScrollToTop from "./util/ScrollToTop";

const MainContent = () => {

    return (
        <main style={{height: '100%'}}>
            <ScrollToTop/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact strict={false} path='/tree/:id' render={({match, ...remainingProps}) => {
                    const treeId = match.params["id"];
                    return (<Home focusTreeId={treeId} {...remainingProps}/>)
                }}/>
                <Route exact strict={false} path='/about' component={About}/>
            </Switch>
        </main>
    );
};

export default MainContent;
