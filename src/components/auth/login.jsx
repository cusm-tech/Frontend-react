import React from 'react'

import {
    makeStyles,
    TextField,
    Grid,
    Button
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2)
    },
    fields: {
        width: 500
    }
}))

const Login = props => {
    const classes = useStyle()
    return (
        <div className={classes.root}>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Username"
                        className={classes.fields}
                        value={props.username}
                        onChange={props.userHandle}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        className={classes.fields}
                        value={props.password}
                        onChange={props.passHandle}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        onClick={props.login}
                    >
                        Login
                        </Button>
                </Grid>

            </Grid>
        </div>
    )
}

export default Login