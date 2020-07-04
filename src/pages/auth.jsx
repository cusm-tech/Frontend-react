import React, { useState } from 'react'

import {
    Container,
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
    Grid
} from '@material-ui/core'

// importing custom components 
import Login from '../components/auth/login'
import Signup from '../components/auth/signup'

const useStyle = makeStyles(theme => ({
    bottomBar: {
        width: '100%'
    }
}))

const Auth = props => {
    const classes = useStyle()
    const [value, setValue] = useState(0)
    return <div>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BottomNavigation
                        showLabels
                        className={classes.bottomBar}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                    >
                        <BottomNavigationAction label="Login" />
                        <BottomNavigationAction label="Signup" />
                    </BottomNavigation>
                </Grid>
            </Grid>

            <center>
                {(value === 0)? <Login /> : <Signup /> }
            </center>

        </Container>
    </div>
}

export default Auth