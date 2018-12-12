import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {fade} from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import ArrowRight from 'mdi-material-ui/ArrowRight';
import connect from "react-redux/es/connect/connect";
import dataAT from "../reducers/data/at";

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    titleBox: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        }
    },
    title: {
        ...theme.typography.h6,
        lineHeight: 1.2,
        color: "#fff"
    },
    subtitle: {
        ...theme.typography.h6,
        fontSize: 10,
        lineHeight: 1,
        color: "#fff"
    },
    repoTitle: {
        ...theme.typography.h6,
        fontFamily: "Roboto Mono, monospace",
        fontWeight: "300",
        color: "#fff"
    },
    repoSrc: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    repoSrcIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 300,
        },
    },
});

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            src: props.src
        }
    }

    onSrcChange = (ev) => {
        this.setState({
            src: ev.target.value
        });
    };

    onSrcLoad = () => {
        this.props.dispatch({
            type: dataAT.LOAD_DATA,
            src: this.state.src
        })
    };

    render() {
        const {classes, src} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.titleBox}>
                            <Typography className={classes.title} component="h1">
                                Ethlas
                            </Typography>
                            <Typography className={classes.subtitle} component="h2">
                                Atlas of open source
                            </Typography>
                        </div>
                        <div className={classes.repoSrc}>
                            <div className={classes.repoSrcIcon}>
                                <GithubCircle/>
                            </div>
                            <InputBase
                                defaultValue={src}
                                placeholder="Enter ethlas data GH repo…"
                                fullWidth
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={this.onSrcChange}
                            />
                        </div>
                        <IconButton className={classes.loadButton} color="inherit"
                                    aria-label="Load network data" onClick={this.onSrcLoad}>
                            <ArrowRight />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const ConnectedHeader = connect(state => ({
    src: state.data.src
}))(Header);


export default withStyles(styles)(ConnectedHeader);