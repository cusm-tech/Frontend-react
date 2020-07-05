import React from 'react'
import {useHistory} from 'react-router-dom'

import {
    TOKEN,
    USERNAME
} from '../../constants/localstorage'

import {
    Button,
    Typography
} from '@material-ui/core'

const Auth = props => {
    const history = useHistory()
    const route = path => {
        history.push(path)
    }

    return (
        <div>
            {(localStorage.getItem(TOKEN))? <Typography>
                {localStorage.getItem(USERNAME)}
            </Typography>: <Button onClick={() => {route('/auth')}}>
                Login
            </Button>}
        </div>
    )
}

export default Auth