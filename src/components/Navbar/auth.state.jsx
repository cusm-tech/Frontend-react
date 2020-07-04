import React from 'react'
import {useHistory} from 'react-router-dom'

import {
    Button
} from '@material-ui/core'

const Auth = props => {
    const history = useHistory()
    const route = path => {
        history.push(path)
    }

    return (
        <div>
            <Button onClick={() => {route('/auth')}}>
                Login
            </Button>
        </div>
    )
}

export default Auth