import React from "react";
import MainContent from "./MainContent";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";

const styles = theme => ({
    root: {
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: theme.palette.background.paper
    },
    header: {
        position: "absolute",
        top: 0,
        width: "100%"
    }
});

class App extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Header/>
                <MainContent/>
            </div>
        );
    }

}

export default withStyles(styles)(App);

