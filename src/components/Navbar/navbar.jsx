import React from 'react'
import PropTypes from 'prop-types';

import {
    AppBar,
    makeStyles,
    Toolbar,
    Typography,
    Slide,
    useScrollTrigger,
    Button
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    appbar: {
        // transition: '.22s',
        color: '#000',
        backgroundColor: '#fff',
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#fff'
        }
    },
    title: {
        flexGrow: 1
    }
}))

const HideOnScroll = props => {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Navbar = props => {
    const classes = useStyle()

    return (
        <div>
            <HideOnScroll {...props}>
                <AppBar
                    variant="elevation"
                    position="sticky"
                    className={classes.appbar}
                    elevation="0">
                    <Toolbar>
                        <Typography className={classes.title}>
                            CUSM
                    </Typography>
                    <Button>
                        Login
                    </Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    )
}

export default Navbar