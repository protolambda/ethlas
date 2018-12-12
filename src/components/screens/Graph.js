import React from "react";
import CytoscapeComponent from 'react-cytoscapejs';
import connect from "react-redux/es/connect/connect";
import Typography from "@material-ui/core/es/Typography/Typography";
import {withStyles} from "@material-ui/core";

const elements = [
    {data: {id: 'one', label: 'Node 1'}, position: {x: 0, y: 0}},
    {data: {id: 'two', label: 'Node 2'}, position: {x: 100, y: 0}},
    {data: {source: 'one', target: 'two', label: 'Edge from Node1 to Node2'}}
];


const styles = theme => ({
    fallback: {
        padding: 10 * theme.spacing.unit
    }
});


class Graph extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes, src, status} = this.props;

        if (!src) {
            return (
                <div className={classes.fallback}>
                    <Typography variant="body1">
                        To get started, enter the name of the github data repository which defines the network.<br/>
                        Or check one of the below:<br/>
                        <code>protolambda/ethlas-ethereum</code><br/>
                        (more coming soon)
                    </Typography>
                </div>
            );
        }
        if (status === "fail") {
            return (
                <div className={classes.fallback}>
                    <Typography variant="body1">
                        Failed to load data for repository: {src}.
                    </Typography>
                </div>
            );
        }

        if (status === "loading") {
            return (
                <div className={classes.fallback}>
                    <Typography variant="body1">
                        Loading data for repository: {src}
                    </Typography>
                </div>
            );
        }

        return (<div style={{height: '100%', width: '100%'}}>
                <CytoscapeComponent elements={elements} style={{width: '100%', height: '100%'}} pan={{x: 100, y: 100}}/>
            </div>
        );
    }
}

// eh..., connected with redux, not related to the "graph"
const ConnectedGraph = connect(state => ({
    src: state.data.src,
    status: state.data.status
}))(Graph);

export default withStyles(styles)(ConnectedGraph);