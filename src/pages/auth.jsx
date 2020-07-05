import React, { useState } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import {
    TOKEN,
    USERNAME
} from '../constants/localstorage'

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

import {
    LOGIN_URL,
    BASE_URL,
    SIGNUP_URL
} from '../constants/urls'

const useStyle = makeStyles(theme => ({
    bottomBar: {
        width: '100%'
    }
}))

const Auth = props => {
    const classes = useStyle()
    const [value, setValue] = useState(0)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setLogin] = useState(false)

    const updateUsername = event => {
        setUsername(event.target.value)
    }

    const UpdatePassword = event => {
        setPassword(event.target.value)
    }

    const login = () => {
        Axios({
            method: 'POST',
            url: LOGIN_URL,
            data: {
                username: username,
                password: password
            }
        }).then(res => {
            console.log(res)
            localStorage.setItem(TOKEN, res.data.token)
            localStorage.setItem(USERNAME, res.data.username)
            setLogin(true)
        }).catch(err => {
            console.log(err)
            alert('something went worng try again')
        })

    }

    const signup = () => {
        Axios({
            method: 'POST',
            url: SIGNUP_URL,
            data: {
                username: username,
                password: password
            }
        }).then(res => {
            console.log(res)
            localStorage.setItem(TOKEN, res.data.token)
            localStorage.setItem(USERNAME, res.data.username)
            setLogin(true)
        }).catch(err => {
            console.log(err)
            alert('something went worng try again')
        })

    }

    if (isLogin) {
        return <Redirect
            path="/"

        />
    }

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
                {(value === 0) ?
                    <Login
                        username={username}
                        password={password}
                        userHandle={updateUsername}
                        passHandle={UpdatePassword}
                        login={login}
                    /> :
                    <Signup
                        username={username}
                        password={password}
                        userHandle={updateUsername}
                        passHandle={UpdatePassword}
                        signup={signup}
                    />}
            </center>

        </Container>
    </div>
}

export default Auth